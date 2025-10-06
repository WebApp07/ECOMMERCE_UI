import { z } from "zod";

export type ProductType = {
  id: string | number;
  name: string;
  shortDescription: string;
  description: string;
  price: number;
  sizes: string[];
  colors: string[];
  images: Record<string, string>;
};

export type ProductsType = ProductType[];

export type cartItemType = ProductType & {
  quantity: number;
  selectedSize: string;
  selectedColor: string;
};

export type cartItemsType = cartItemType[];

export const shippingFormSchema = z.object({
  name: z.string().min(1, "Name is required!"),
  email: z.string().min(1, "Email is required!"),
  phone: z
    .string()
    .regex(/^\d+$/, "Phone number must contain only numbers!")
    .min(7, "Phone number must be at least 7 digits!")
    .max(10, "Phone number must be at most 10 digits!"),
  address: z.string().min(1, "Address is required!"),
  city: z.string().min(1, "City is required!"),
});

export type ShippingFormInputs = z.infer<typeof shippingFormSchema>;
