export interface AnimalCreateDto {
  title: string;
  email: string;
  phone: string;
  name: string;
  gender: string;
  type: string;
  color?: string;
  age: string;
  description?: string;
  breed?: string;
  size: string;
  is_vaccinated: boolean;
}
