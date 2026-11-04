import { z } from "zod";

export const contactSchema = z.object({
  name: z.string().trim().min(2, "Name must be at least 2 characters"),
  email: z.email("Enter a valid email address"),
  message: z
    .string()
    .trim()
    .min(10, "Message must be at least 10 characters")
    .max(1000, "Message must be 1000 characters or less"),
});

export type ContactInput = z.infer<typeof contactSchema>;

export type ActionResult =
  | { ok: true; message: string }
  | { ok: false; error: string };
