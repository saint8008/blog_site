import { render, screen } from "@testing-library/react";
import About from "../components/About";

const props = {
  image: "https://example.com/logo.png",
  about: "This is a personal blog documenting my life",
};

describe("About", () => {
  test("renders an aside element", () => {
    render(<About {...props} />);
    expect(screen.getByRole("complementary")).toBeInTheDocument();
  });

  test("renders the image with the correct src and alt text", () => {
    render(<About {...props} />);
    const img = screen.getByRole("img", { name: /blog logo/i });
    expect(img).toHaveAttribute("src", props.image);
  });

  test("displays the about text", () => {
    render(<About {...props} />);
    expect(screen.getByText(props.about)).toBeInTheDocument();
  });

  test("displays different about text when the prop changes", () => {
    render(<About image={props.image} about="Something else" />);
    expect(screen.getByText("Something else")).toBeInTheDocument();
  });
});