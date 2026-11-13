require("@testing-library/jest-dom");
import { render, screen } from "@testing-library/react";
import Header from "../components/Header";

describe("Header", () => {
  test("renders a header element", () => {
    const { container } = render(<Header name="My New Blog" />);
    expect(container.querySelector("header")).toBeInTheDocument();
  });

  test("displays the name prop", () => {
    render(<Header name="My New Blog" />);
    expect(screen.getByText("My New Blog")).toBeInTheDocument();
  });

  test("updates when the name prop changes", () => {
    const { rerender } = render(<Header name="First Name" />);
    expect(screen.getByText("First Name")).toBeInTheDocument();

    rerender(<Header name="Second Name" />);
    expect(screen.getByText("Second Name")).toBeInTheDocument();
    expect(screen.queryByText("First Name")).not.toBeInTheDocument();
  });
});