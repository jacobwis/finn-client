export interface CoverLinks {
  smallThumbnail?: string;
  thumbnail?: string;
  small?: string;
  medium?: string;
  large?: string;
  extraLarge?: string;
}

export interface Book {
  id: string;
  title: string;
  subtitle: string;
  authors: string[];
  publisher: string;
  categories: string[];
  covers: CoverLinks;
  isOnList: boolean;
  hasRead: boolean;
  description: string;
}
