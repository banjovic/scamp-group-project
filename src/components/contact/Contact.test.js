import { fireEvent, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import Contact from "./Contact";

test("shows errors on submit with empty fields", () => {
  render(<Contact />);

  // userEvent.click(screen.getByRole("button"));
  fireEvent.submit(screen.getByRole("button", "Submit"));
  const errors = screen.getAllByText(/\w+ is required$/i);

  errors.map((error) => expect(error).toBeInTheDocument());
  expect(screen.getByText(/message is empty/i)).toBeInTheDocument();
});

test("show errors on submity", () => {
  render(<Contact />);

  fireEvent.change(screen.getByPlaceholderText("Enter your full name"), {
    target: { value: "Jon Doe" },
  });
  fireEvent.change(screen.getByPlaceholderText("Enter your e-mail address"), {
    target: { value: "1jonDoegmail.com" },
  });
  fireEvent.change(screen.getByPlaceholderText("Enter your phone number"), {
    target: { value: "08011235597" },
  });
  fireEvent.change(screen.getByPlaceholderText("Enter your message"), {
    target: { value: "Hi, just wanted to check in" },
  });
  fireEvent.submit(screen.getByRole("button"));

  expect(screen.getByText(/email is incorrect/i)).toBeInTheDocument();
});
