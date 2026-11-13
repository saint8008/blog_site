import { render, screen } from "@testing-library/react";
import Article from "../components/Article";

const props = {
  title: "Getting Started with React",
  date: "2026-01-12",
  preview: "A beginner-friendly walkthrough of components.",
};

describe("Article", () => {
  test("renders an article element", () => {
    render(<Article {...props} />);
    expect(screen.getByRole("article")).toBeInTheDocument();
  });

  test("renders the title in an h3", () => {
    render(<Article {...props} />);
    const heading = screen.getByRole("heading", { level: 3 });
    expect(heading).toHaveTextContent(props.title);
  });

  test("renders the date in a small element", () => {
    const { container } = render(<Article {...props} />);
    const small = container.querySelector("small");
    expect(small).toBeInTheDocument();
    expect(small).toHaveTextContent(props.date);
  });

  test("renders the preview in a paragraph", () => {
    const { container } = render(<Article {...props} />);
    const p = container.querySelector("p");
    expect(p).toBeInTheDocument();
    expect(p).toHaveTextContent(props.preview);
  });

  test("renders elements in the order h3, small, p", () => {
    const { container } = render(<Article {...props} />);
    const tags = Array.from(container.querySelector("article").children).map(
      (el) => el.tagName.toLowerCase()
    );
    expect(tags).toEqual(["h3", "small", "p"]);
  });
});