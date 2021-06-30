export interface ContactUsCreateDto {
  subject: string;
  email: string;
  phone?: string;
  message: string;
}
