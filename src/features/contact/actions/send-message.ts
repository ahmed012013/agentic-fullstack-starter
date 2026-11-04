"use server";

import { contactSchema, type ActionResult } from "@/lib/validations/contact";

// Server-side validation is mandatory: never trust what the client sends.
export async function sendMessage(input: unknown): Promise<ActionResult> {
  const parsed = contactSchema.safeParse(input);
  if (!parsed.success) {
    return { ok: false, error: "Please check the form and try again." };
  }

  // TODO: persist or forward the message (DB, email provider, etc.).
  // Read secrets via process.env on the server only — never expose them to the client.

  return { ok: true, message: `Thanks ${parsed.data.name}, we'll be in touch.` };
}
