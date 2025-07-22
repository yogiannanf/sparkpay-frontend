export const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000/api";

export const ENDPOINTS = {
  features: `${API_URL}/features`,
  faqs: `${API_URL}/faqs`,
  testimonials: `${API_URL}/testimonials`,
  partners: `${API_URL}/partners`,
};
