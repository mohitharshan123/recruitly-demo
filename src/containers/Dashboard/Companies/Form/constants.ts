import { z } from "zod";

export type FormValues = {
  name: string;
  id: string;
  imageUrl: string | null;
  website: string | null;
  phone: string | null;
  ownerName: string;
  description: string | null;
};

export const COMPANY_VALIDATION_SCHEMA = z.object({
  name: z.string().min(1, "Company name is required"),
  imageUrl: z.string().url("Invalid URL").optional().or(z.literal("")),
  website: z.string().url("Invalid URL"),
  phone: z.string().optional().nullable(),
  ownerName: z.string().min(1, "Owner name is required"),
  description: z.string().optional().nullable(),
});

export const COMPANY_FORM_INITIAL_VALUES: FormValues = {
  id: "",
  name: "",
  imageUrl: "",
  website: "",
  phone: "",
  ownerName: "",
  description: "",
};
