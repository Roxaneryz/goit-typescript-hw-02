export type Image = {
  id: string;
  alt_description: string;
  likes: number;
  user: {
    name: string;
  };
  urls: {
    small: string;
    regular: string;
  };
}
