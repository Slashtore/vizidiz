export interface Project {
  id: number;
  title: string;
  category: ProjectCategory;
  imageUrls: string[];
  description?: string;
  client?: string;
  year?: string;
}

export interface Service {
  id: number;
  title: string;
  description: string;
  iconName: string;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  company?: string;
  text: string;
  avatarUrl: string;
}

export interface WorkflowStep {
  id: number;
  title: string;
  description: string;
  number: string;
}

export enum ProjectCategory {
  INTERIOR = 'interior',
  EXTERIOR = 'exterior',
  PRODUCT = 'product',
  MODELING = 'modeling',
  ALL = 'all'
}