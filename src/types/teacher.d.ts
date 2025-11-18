export interface Teacher {
  id: number;
  name: string;
  subject: string;
  rating: number;
  reviews: number;
  hourlyRate: number;
  students: number;
  image: string;
  city: string;
  mode: string[];
  description?: string;
  title?: string;
}

export interface Review {
  id: number;
  name: string;
  comment: string;
  rating: number;
}

export interface PriceOption {
  label: string;
  value: string;
}
