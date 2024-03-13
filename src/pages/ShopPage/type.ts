import type { FileWithPath } from "@mantine/dropzone";

export type RequestStatus = {
  description: string;
  message: string;
};

export type Product = {
  id: string;
  title: string;
  brand: string;
  images: FileWithPath[];
  imageURL: string;
  description: string;
  maxQuantity: number;
  quantity: number;
  price: number;
  isRecommended: boolean;
  dateAdded: number;
  imageCollection: [{ url: string; id: string }];
};
