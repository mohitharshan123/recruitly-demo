import { z } from "zod";

export const COMPANY_VALIDATION_SCHEMA = z.object({
  name: z.string().min(1, "Company name is required"),
  imageUrl: z.string().url("Invalid URL").optional().or(z.literal("")),
  website: z.string().url("Invalid URL").optional().or(z.literal("")),
  phone: z.string().optional().nullable(),
  ownerName: z.string().optional().nullable(),
  description: z.string().optional().nullable(),
});

export const COMPANY_FORM_INITIAL_VALUES: any = {
  name: "",
  imageUrl: "",
  website: "",
  phone: "",
  ownerName: "",
  description: "",
};
