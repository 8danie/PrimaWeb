import {
  SiteConfiguration,
  HeroSlide,
  ProgramOffer,
  AboutSectionData,
  Testimonial,
  ContactMessagePayload,
  ApiResponse
} from './types';

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8002/api';

// Données de secours fidèles au HTML d'origine
export const DEFAULT_CONFIG: SiteConfiguration = {
  id: 1,
  site_name: "Brighton",
  tagline: "A Perfect Learning Center For Your Kids",
  phone: "+01 1234567890",
  email: "demo@gmail.com",
  address: "Location",
  latitude: 40.645037,
  longitude: -73.880224,
  footer_about_text: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration",
  contact_info_text: "Donec odio. Quisque volutpat mattis eros. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros",
  information_text: "Donec odio. Quisque volutpat mattis eros. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros",
  account_text: "Donec odio. Quisque volutpat mattis eros. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros",
  copyright_text: "2019 All Rights Reserved By Free Html Templates"
};

export const DEFAULT_SLIDES: HeroSlide[] = [
  {
    id: 1,
    title: "A Perfect Learning Center",
    subtitle: "For Your Kids",
    description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as",
    primary_btn_text: "Read More",
    primary_btn_url: "/about",
    secondary_btn_text: "Contact us",
    secondary_btn_url: "/contact",
    order: 0,
    is_active: true
  },
  {
    id: 2,
    title: "A Perfect Learning Center",
    subtitle: "For Your Kids",
    description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as",
    primary_btn_text: "Read More",
    primary_btn_url: "/about",
    secondary_btn_text: "Contact us",
    secondary_btn_url: "/contact",
    order: 1,
    is_active: true
  },
  {
    id: 3,
    title: "A Perfect Learning Center",
    subtitle: "For Your Kids",
    description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as",
    primary_btn_text: "Read More",
    primary_btn_url: "/about",
    secondary_btn_text: "Contact us",
    secondary_btn_url: "/contact",
    order: 2,
    is_active: true
  },
  {
    id: 4,
    title: "A Perfect Learning Center",
    subtitle: "For Your Kids",
    description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as",
    primary_btn_text: "Read More",
    primary_btn_url: "/about",
    secondary_btn_text: "Contact us",
    secondary_btn_url: "/contact",
    order: 3,
    is_active: true
  },
  {
    id: 5,
    title: "A Perfect Learning Center",
    subtitle: "For Your Kids",
    description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as",
    primary_btn_text: "Read More",
    primary_btn_url: "/about",
    secondary_btn_text: "Contact us",
    secondary_btn_url: "/contact",
    order: 4,
    is_active: true
  }
];

export const DEFAULT_PROGRAMS: ProgramOffer[] = [
  {
    id: 1,
    title: "safety first",
    description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem",
    icon_name: "shield",
    order: 1,
    is_featured: true
  },
  {
    id: 2,
    title: "small class Size",
    description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem",
    icon_name: "photo-size",
    order: 2,
    is_featured: true
  },
  {
    id: 3,
    title: "infant care",
    description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem",
    icon_name: "vegan",
    order: 3,
    is_featured: true
  },
  {
    id: 4,
    title: "cretive lessons",
    description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem",
    icon_name: "education",
    order: 4,
    is_featured: true
  },
  {
    id: 5,
    title: "certified teachers",
    description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem",
    icon_name: "help",
    order: 5,
    is_featured: true
  },
  {
    id: 6,
    title: "happy environment",
    description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem",
    icon_name: "planet-earth",
    order: 6,
    is_featured: true
  }
];

export const DEFAULT_ABOUT: AboutSectionData = {
  id: 1,
  title: "A Few words about us",
  content: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web",
  button_text: "Read More",
  button_url: "/about"
};

export const DEFAULT_TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    client_name: "Rohali jonson",
    client_role: "customer",
    quote: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined",
    order: 1,
    is_published: true
  },
  {
    id: 2,
    client_name: "Rohali jonson",
    client_role: "customer",
    quote: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined",
    order: 2,
    is_published: true
  },
  {
    id: 3,
    client_name: "Rohali jonson",
    client_role: "customer",
    quote: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined",
    order: 3,
    is_published: true
  }
];

export async function fetchSiteConfig(): Promise<SiteConfiguration> {
  try {
    const res = await fetch(`${API_BASE_URL}/configuration/`, { cache: 'no-store' });
    if (!res.ok) return DEFAULT_CONFIG;
    return await res.json();
  } catch {
    return DEFAULT_CONFIG;
  }
}

export async function fetchHeroSlides(): Promise<HeroSlide[]> {
  try {
    const res = await fetch(`${API_BASE_URL}/slides/`, { cache: 'no-store' });
    if (!res.ok) return DEFAULT_SLIDES;
    const data = await res.json();
    return Array.isArray(data) && data.length > 0 ? data : DEFAULT_SLIDES;
  } catch {
    return DEFAULT_SLIDES;
  }
}

export async function fetchPrograms(): Promise<ProgramOffer[]> {
  try {
    const res = await fetch(`${API_BASE_URL}/programs/`, { cache: 'no-store' });
    if (!res.ok) return DEFAULT_PROGRAMS;
    const data = await res.json();
    return Array.isArray(data) && data.length > 0 ? data : DEFAULT_PROGRAMS;
  } catch {
    return DEFAULT_PROGRAMS;
  }
}

export async function fetchAboutSection(): Promise<AboutSectionData> {
  try {
    const res = await fetch(`${API_BASE_URL}/about/`, { cache: 'no-store' });
    if (!res.ok) return DEFAULT_ABOUT;
    return await res.json();
  } catch {
    return DEFAULT_ABOUT;
  }
}

export async function fetchTestimonials(): Promise<Testimonial[]> {
  try {
    const res = await fetch(`${API_BASE_URL}/testimonials/`, { cache: 'no-store' });
    if (!res.ok) return DEFAULT_TESTIMONIALS;
    const data = await res.json();
    return Array.isArray(data) && data.length > 0 ? data : DEFAULT_TESTIMONIALS;
  } catch {
    return DEFAULT_TESTIMONIALS;
  }
}

export async function submitContactMessage(payload: ContactMessagePayload): Promise<ApiResponse<any>> {
  try {
    const res = await fetch(`${API_BASE_URL}/contact/`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    });
    return await res.json();
  } catch (err: any) {
    return {
      success: false,
      message: "Une erreur réseau est survenue lors de l'envoi de votre message."
    };
  }
}

export async function submitNewsletter(email: string): Promise<ApiResponse<any>> {
  try {
    const res = await fetch(`${API_BASE_URL}/newsletter/subscribe/`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email })
    });
    return await res.json();
  } catch (err: any) {
    return {
      success: false,
      message: "Une erreur réseau est survenue lors de l'inscription à la newsletter."
    };
  }
}
