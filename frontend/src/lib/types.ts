export interface SiteConfiguration {
  id: number;
  site_name: string;
  tagline: string;
  phone: string;
  email: string;
  address: string;
  latitude: number;
  longitude: number;
  footer_about_text: string;
  contact_info_text: string;
  information_text: string;
  account_text: string;
  copyright_text: string;
}

export interface HeroSlide {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  primary_btn_text: string;
  primary_btn_url: string;
  secondary_btn_text: string;
  secondary_btn_url: string;
  order: number;
  is_active: boolean;
}

export interface ProgramOffer {
  id: number;
  title: string;
  description: string;
  icon_name: string;
  image?: string;
  order: number;
  is_featured: boolean;
}

export interface AboutSectionData {
  id: number;
  title: string;
  content: string;
  image?: string;
  button_text: string;
  button_url: string;
}

export interface Testimonial {
  id: number;
  client_name: string;
  client_role: string;
  quote: string;
  avatar?: string;
  order: number;
  is_published: boolean;
}

export interface ContactMessagePayload {
  name: string;
  email: string;
  phone?: string;
  message?: string;
}

export interface ApiResponse<T> {
  success: boolean;
  message?: string;
  data?: T;
  errors?: Record<string, string[]>;
}
