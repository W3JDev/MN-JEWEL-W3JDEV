import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

const ThreeBackground: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current || typeof window === 'undefined') return;

    try {
        const scene = new THREE.Scene();
        // Remove fog to keep stars crisp
        // scene.fog = new THREE.FogExp2(0x050505, 0.002);

        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        camera.position.z = 30;

        const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
        renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
        
        while (containerRef.current.firstChild) {
          containerRef.current.removeChild(containerRef.current.firstChild);
        }
        containerRef.current.appendChild(renderer.domElement);

        // --- CUSTOM SHADER FOR TWINKLING STARS ---
        const particlesGeometry = new THREE.BufferGeometry();
        const particlesCount = 1500;
        
        const posArray = new Float32Array(particlesCount * 3);
        const sizesArray = new Float32Array(particlesCount);
        const timeOffsetsArray = new Float32Array(particlesCount);

        for (let i = 0; i < particlesCount; i++) {
          posArray[i * 3 + 0] = (Math.random() - 0.5) * 150; // X
          posArray[i * 3 + 1] = (Math.random() - 0.5) * 150; // Y
          posArray[i * 3 + 2] = (Math.random() - 0.5) * 100; // Z
          
          sizesArray[i] = Math.random() * 2.0;
          timeOffsetsArray[i] = Math.random() * 100.0;
        }

        particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));
        particlesGeometry.setAttribute('aSize', new THREE.BufferAttribute(sizesArray, 1));
        particlesGeometry.setAttribute('aTimeOffset', new THREE.BufferAttribute(timeOffsetsArray, 1));

        const particlesMaterial = new THREE.ShaderMaterial({
            uniforms: {
                uTime: { value: 0 },
                uColor: { value: new THREE.Color('#00f3ff') }
            },
            vertexShader: `
                uniform float uTime;
                attribute float aSize;
                attribute float aTimeOffset;
                varying float vAlpha;
                
                void main() {
                    vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
                    gl_Position = projectionMatrix * mvPosition;
                    
                    // Size attenuation
                    gl_PointSize = aSize * (200.0 / -mvPosition.z);
                    
                    // Twinkle math: sine wave based on time + random offset
                    float twinkle = sin(uTime * 3.0 + aTimeOffset) * 0.5 + 0.5;
                    vAlpha = 0.3 + 0.7 * twinkle; // Min opacity 0.3, Max 1.0
                }
            `,
            fragmentShader: `
                uniform vec3 uColor;
                varying float vAlpha;
                
                void main() {
                    // Make it circular
                    float r = distance(gl_PointCoord, vec2(0.5));
                    if (r > 0.5) discard;
                    
                    // Soft edge glow
                    float glow = 1.0 - (r * 2.0);
                    glow = pow(glow, 2.0);
                    
                    gl_FragColor = vec4(uColor, vAlpha * glow);
                }
            `,
            transparent: true,
            depthWrite: false,
            blending: THREE.AdditiveBlending
        });

        const particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial);
        scene.add(particlesMesh);

        // Interaction State
        let mouseX = 0;
        let mouseY = 0;
        let targetX = 0;
        let targetY = 0;

        const handleMouseMove = (event: MouseEvent) => {
          mouseX = (event.clientX - window.innerWidth / 2) * 0.0001;
          mouseY = (event.clientY - window.innerHeight / 2) * 0.0001;
        };

        const handleResize = () => {
          camera.aspect = window.innerWidth / window.innerHeight;
          camera.updateProjectionMatrix();
          renderer.setSize(window.innerWidth, window.innerHeight);
        };

        document.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('resize', handleResize);

        let animationId: number;
        const clock = new THREE.Clock();

        const animate = () => {
          const elapsedTime = clock.getElapsedTime();
          
          // Update Uniforms
          particlesMaterial.uniforms.uTime.value = elapsedTime;

          // Smooth Camera Movement
          targetX = mouseX * 2;
          targetY = mouseY * 2;
          
          particlesMesh.rotation.y += 0.0002;
          particlesMesh.rotation.x += 0.0001;
          
          particlesMesh.rotation.y += 0.02 * (targetX - particlesMesh.rotation.y);
          particlesMesh.rotation.x += 0.02 * (targetY - particlesMesh.rotation.x);

          renderer.render(scene, camera);
          animationId = requestAnimationFrame(animate);
        };

        animate();

        return () => {
          document.removeEventListener('mousemove', handleMouseMove);
          window.removeEventListener('resize', handleResize);
          cancelAnimationFrame(animationId);
          renderer.dispose();
          if (containerRef.current) {
            containerRef.current.innerHTML = '';
          }
        };
    } catch (e) {
        console.error("Three.js initialization failed:", e);
    }
  }, []);

  return (
    <div 
      ref={containerRef} 
      className="fixed top-0 left-0 w-full h-screen z-0 pointer-events-none bg-[#050505]" 
    />
  );
};

export default ThreeBackground;