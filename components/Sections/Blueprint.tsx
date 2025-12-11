import React, { useEffect, useRef, useState } from 'react';
import GlassCard from '../UI/GlassCard';
import SectionTitle from '../UI/SectionTitle';

const Blueprint: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // --- CONFIGURATION ---
    const COLORS = {
      cyan: '#00f3ff',
      orange: '#FF3D00',
      purple: '#7e22ce',
      bg: '#050505'
    };

    // System Nodes (The "Blueprint" Structure)
    const nodes = [
      { id: 'repo', x: 0.2, y: 0.5, label: 'GITHUB REPO', color: '#ffffff', icon: '\uf126' }, // code branch icon
      { id: 'n8n', x: 0.5, y: 0.5, label: 'n8n WORKFLOW', color: COLORS.orange, icon: '\uf0e7' }, // lightning
      { id: 'live', x: 0.8, y: 0.5, label: 'LIVE PORTFOLIO', color: COLORS.cyan, icon: '\uf0ac' } // globe
    ];

    let width = 0;
    let height = 0;
    let particles: Particle[] = [];
    let packets: Packet[] = [];
    let animationId: number;
    let lastTime = 0;
    let packetTimer = 0;

    // Mouse State for Lerp
    const mouse = { x: 0, y: 0, lastX: 0, lastY: 0, active: false };

    // --- CLASSES ---

    class Particle {
      x: number;
      y: number;
      vx: number;
      vy: number;
      life: number;
      color: string;
      size: number;

      constructor(x: number, y: number, color: string) {
        this.x = x;
        this.y = y;
        const angle = Math.random() * Math.PI * 2;
        const speed = Math.random() * 2;
        this.vx = Math.cos(angle) * speed;
        this.vy = Math.sin(angle) * speed;
        this.life = 1.0;
        this.color = color;
        this.size = Math.random() * 2 + 1;
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;
        this.vx *= 0.95; // Friction
        this.vy *= 0.95;
        this.life -= 0.02; // Fade out
      }

      draw(ctx: CanvasRenderingContext2D) {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.globalAlpha = this.life;
        ctx.fill();
        ctx.globalAlpha = 1.0;
      }
    }

    class Packet {
      fromIndex: number;
      toIndex: number;
      progress: number;
      speed: number;
      color: string;

      constructor(fromIndex: number, toIndex: number, color: string) {
        this.fromIndex = fromIndex;
        this.toIndex = toIndex;
        this.progress = 0;
        this.speed = 0.01 + Math.random() * 0.01;
        this.color = color;
      }

      update() {
        this.progress += this.speed;
      }

      draw(ctx: CanvasRenderingContext2D) {
        const startNode = nodes[this.fromIndex];
        const endNode = nodes[this.toIndex];
        
        // Calculate current position based on progress
        const currentX = startNode.x * width + (endNode.x * width - startNode.x * width) * this.progress;
        const currentY = startNode.y * height + (endNode.y * height - startNode.y * height) * this.progress;

        // Draw Packet (Glowing orb)
        ctx.shadowBlur = 15;
        ctx.shadowColor = this.color;
        ctx.beginPath();
        ctx.arc(currentX, currentY, 4, 0, Math.PI * 2);
        ctx.fillStyle = '#fff';
        ctx.fill();
        ctx.shadowBlur = 0;

        // Trail behind packet
        ctx.beginPath();
        ctx.moveTo(currentX - (currentX - startNode.x * width) * 0.1, currentY);
        ctx.lineTo(currentX, currentY);
        ctx.strokeStyle = this.color;
        ctx.lineWidth = 2;
        ctx.stroke();
      }
    }

    // --- HELPER FUNCTIONS ---

    const lerp = (start: number, end: number, t: number) => {
      return start * (1 - t) + end * t;
    };

    const resize = () => {
      width = container.offsetWidth;
      height = container.offsetHeight; // Maintain aspect ratio from CSS
      
      // Handle High DPI displays
      const dpr = window.devicePixelRatio || 1;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.scale(dpr, dpr);
    };

    const spawnParticles = (x: number, y: number, count: number, color: string) => {
      for (let i = 0; i < count; i++) {
        particles.push(new Particle(x, y, color));
      }
    };

    // --- ANIMATION LOOP ---

    const animate = (timestamp: number) => {
      const deltaTime = timestamp - lastTime;
      lastTime = timestamp;

      // 1. Clear Canvas with Fade Effect (The Trail Trick)
      // Instead of clearRect, we draw a semi-transparent rect to leave trails
      ctx.fillStyle = 'rgba(5, 5, 5, 0.2)'; // Very distinct fade
      ctx.fillRect(0, 0, width, height);

      // 2. Draw Connections (Lines between nodes)
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.1)';
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(nodes[0].x * width, nodes[0].y * height);
      nodes.forEach((node, i) => {
         if (i > 0) ctx.lineTo(node.x * width, node.y * height);
      });
      ctx.stroke();

      // 3. Update & Draw Packets (Automatic Data Flow)
      packetTimer += deltaTime;
      if (packetTimer > 1500) { // Spawn new packet every 1.5s
          // Randomly decide path: 0->1 or 1->2
          if (Math.random() > 0.5) packets.push(new Packet(0, 1, COLORS.orange));
          else packets.push(new Packet(1, 2, COLORS.cyan));
          packetTimer = 0;
      }

      for (let i = packets.length - 1; i >= 0; i--) {
          packets[i].update();
          packets[i].draw(ctx);
          if (packets[i].progress >= 1) {
              // Packet reached destination - Spawn impact particles
              const targetNode = nodes[packets[i].toIndex];
              spawnParticles(targetNode.x * width, targetNode.y * height, 10, packets[i].color);
              packets.splice(i, 1);
          }
      }

      // 4. Update & Draw Mouse Particles
      for (let i = particles.length - 1; i >= 0; i--) {
        particles[i].update();
        particles[i].draw(ctx);
        if (particles[i].life <= 0) particles.splice(i, 1);
      }

      // 5. Draw Nodes
      nodes.forEach((node) => {
        const nx = node.x * width;
        const ny = node.y * height;
        
        // Node Glow
        const gradient = ctx.createRadialGradient(nx, ny, 0, nx, ny, 30);
        gradient.addColorStop(0, `${node.color}40`); // Transparent center
        gradient.addColorStop(1, 'transparent');
        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(nx, ny, 30, 0, Math.PI * 2);
        ctx.fill();

        // Node Circle
        ctx.strokeStyle = node.color;
        ctx.lineWidth = 2;
        ctx.fillStyle = '#0a0a0a';
        ctx.beginPath();
        ctx.arc(nx, ny, 15, 0, Math.PI * 2);
        ctx.fill();
        ctx.stroke();

        // Text Label
        ctx.fillStyle = node.color;
        ctx.font = 'bold 10px "Space Mono", monospace';
        ctx.textAlign = 'center';
        ctx.fillText(node.label, nx, ny + 35);
      });

      animationId = requestAnimationFrame(animate);
    };

    // --- EVENT LISTENERS ---

    const handleMouseMove = (e: MouseEvent) => {
        const rect = canvas.getBoundingClientRect();
        const currentX = e.clientX - rect.left;
        const currentY = e.clientY - rect.top;

        if (mouse.active) {
            // LERP TRICK: Calculate distance to fill gaps
            const dx = currentX - mouse.lastX;
            const dy = currentY - mouse.lastY;
            const distance = Math.hypot(dx, dy);
            const steps = Math.ceil(distance / 5); // New particle every 5px

            for (let i = 0; i < steps; i++) {
                const t = i / steps;
                const x = lerp(mouse.lastX, currentX, t);
                const y = lerp(mouse.lastY, currentY, t);
                
                // Spawn particles along the path
                // Color depends on x position (gradient effect)
                const color = x < width / 2 ? COLORS.orange : COLORS.cyan;
                particles.push(new Particle(x, y, color));
            }
        } else {
            mouse.active = true;
        }

        mouse.lastX = currentX;
        mouse.lastY = currentY;
        mouse.x = currentX;
        mouse.y = currentY;
    };

    const handleMouseEnter = () => {
        mouse.active = false; // Reset lerp tracking
        setIsHovering(true);
    };
    
    const handleMouseLeave = () => {
        mouse.active = false;
        setIsHovering(false);
    };

    // Initial Setup
    resize();
    window.addEventListener('resize', resize);
    canvas.addEventListener('mousemove', handleMouseMove);
    canvas.addEventListener('mouseenter', handleMouseEnter);
    canvas.addEventListener('mouseleave', handleMouseLeave);
    
    animationId = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('resize', resize);
      canvas.removeEventListener('mousemove', handleMouseMove);
      canvas.removeEventListener('mouseenter', handleMouseEnter);
      canvas.removeEventListener('mouseleave', handleMouseLeave);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <section className="py-32 bg-black text-center border-t border-white/5 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial from-[#00f3ff]/5 to-transparent opacity-50 pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        
        <SectionTitle 
            eyebrow="SYSTEM ARCHITECTURE"
            title="Automation Blueprint"
            description="Interactive System Playground. Move your cursor to inject data streams. Watch the swarm auto-deploy updates."
        />
        
        <GlassCard 
            className="p-0 rounded-2xl relative overflow-hidden bg-[#050505] h-[400px] w-full border border-white/10 group cursor-crosshair" 
            hoverEffect={false}
        >
          {/* Header UI Overlay */}
          <div className="absolute top-0 left-0 right-0 p-4 flex justify-between items-center pointer-events-none z-10">
            <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500" />
                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                <div className="w-3 h-3 rounded-full bg-green-500" />
            </div>
            <div className={`font-mono text-[10px] transition-colors duration-300 ${isHovering ? 'text-[#00f3ff]' : 'text-gray-600'}`}>
                {isHovering ? '>> USER_INPUT_DETECTED <<' : '>> SYSTEM_IDLE'}
            </div>
          </div>

          <div ref={containerRef} className="w-full h-full relative">
              <canvas 
                ref={canvasRef} 
                className="w-full h-full block"
              />
          </div>

          {/* Footer UI Overlay */}
          <div className="absolute bottom-4 left-4 right-4 text-left pointer-events-none select-none">
             <div className="font-mono text-[10px] text-gray-500 bg-black/50 inline-block px-2 py-1 rounded backdrop-blur-sm border border-white/5">
                <span className="text-[#FF3D00]">const</span> flow = <span className="text-[#00f3ff]">new</span> Swarm();
             </div>
          </div>
        </GlassCard>
      </div>
    </section>
  );
};

export default Blueprint;