import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it, vi } from "vitest";

import { ContactForm } from "./contact-form";

vi.mock("sonner", () => ({ toast: { success: vi.fn(), error: vi.fn() } }));

describe("ContactForm", () => {
  it("shows validation errors and does not submit when fields are invalid", async () => {
    const user = userEvent.setup();
    const action = vi.fn();
    render(<ContactForm action={action} />);

    await user.click(screen.getByRole("button", { name: /send message/i }));

    expect(
      await screen.findByText(/name must be at least 2 characters/i),
    ).toBeInTheDocument();
    expect(screen.getByText(/enter a valid email address/i)).toBeInTheDocument();
    expect(action).not.toHaveBeenCalled();
  });

  it("submits the entered values when the form is valid", async () => {
    const user = userEvent.setup();
    const action = vi.fn().mockResolvedValue({ ok: true, message: "Thanks" });
    render(<ContactForm action={action} />);

    await user.type(screen.getByLabelText(/name/i), "Ahmed");
    await user.type(screen.getByLabelText(/email/i), "ahmed@example.com");
    await user.type(screen.getByLabelText(/message/i), "Hello from the starter!");
    await user.click(screen.getByRole("button", { name: /send message/i }));

    expect(action).toHaveBeenCalledWith({
      name: "Ahmed",
      email: "ahmed@example.com",
      message: "Hello from the starter!",
    });
  });
});
