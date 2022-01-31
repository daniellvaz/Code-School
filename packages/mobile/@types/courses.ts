export interface Courses {
  id: number;
  title: string;
  description: string;
  slug: string;
  image: string;
  classification: number;
  hours: number;
  price: number;
  isHighlighted: boolean;
  department: string;
  tags: string[];
}
