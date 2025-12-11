import { supabase } from './supabaseClient';
import type { Project, Testimonial, ContactSubmission } from './supabaseClient';

// Projects API
export const projectsApi = {
  async getAll(): Promise<Project[]> {
    try {
      const { data, error } = await supabase
        .from('projects')
        .select('*')
        .eq('status', 'published')
        .order('order_index', { ascending: true });

      if (error) throw error;
      return data || [];
    } catch (error) {
      console.error('Error fetching projects:', error);
      return [];
    }
  },

  async getFeatured(): Promise<Project[]> {
    try {
      const { data, error } = await supabase
        .from('projects')
        .select('*')
        .eq('status', 'published')
        .eq('featured', true)
        .order('order_index', { ascending: true })
        .limit(6);

      if (error) throw error;
      return data || [];
    } catch (error) {
      console.error('Error fetching featured projects:', error);
      return [];
    }
  }
};

// Testimonials API
export const testimonialsApi = {
  async getAll(): Promise<Testimonial[]> {
    try {
      const { data, error } = await supabase
        .from('testimonials')
        .select('*')
        .eq('status', 'published')
        .order('order_index', { ascending: true });

      if (error) throw error;
      return data || [];
    } catch (error) {
      console.error('Error fetching testimonials:', error);
      return [];
    }
  },

  async getFeatured(): Promise<Testimonial[]> {
    try {
      const { data, error } = await supabase
        .from('testimonials')
        .select('*')
        .eq('status', 'published')
        .eq('featured', true)
        .limit(3);

      if (error) throw error;
      return data || [];
    } catch (error) {
      console.error('Error fetching featured testimonials:', error);
      return [];
    }
  }
};

// Contact Form API
export const contactApi = {
  async submit(formData: ContactSubmission): Promise<ContactSubmission | null> {
    try {
      const { data, error } = await supabase
        .from('contact_submissions')
        .insert([{
          name: formData.name,
          email: formData.email,
          subject: formData.subject || '',
          message: formData.message,
          phone: formData.phone || '',
          company: formData.company || ''
        }])
        .select()
        .single();

      if (error) throw error;
      return data;
    } catch (error) {
      console.error('Error submitting contact form:', error);
      throw error;
    }
  }
};

// Newsletter API
export const newsletterApi = {
  async subscribe(email: string, name?: string) {
    try {
      const { data, error } = await supabase
        .from('newsletter_subscribers')
        .insert([{ email, name: name || '', status: 'active' }])
        .select()
        .single();

      if (error) {
        if (error.code === '23505') {
          throw new Error('Email already subscribed');
        }
        throw error;
      }
      return data;
    } catch (error) {
      console.error('Error subscribing to newsletter:', error);
      throw error;
    }
  }
};
