import { render, screen, within } from "@testing-library/react";
import ArticleList from "../components/ArticleList";

const posts = [
  { id: 1, title: "Post One", date: "2026-01-01", preview: "Preview one" },
  { id: 2, title: "Post Two", date: "2026-01-02", preview: "Preview two" },
  { id: 3, title: "Post Three", date: "2026-01-03", preview: "Preview three" },
];

describe("ArticleList", () => {
  test("renders a main element", () => {
    render(<ArticleList posts={posts} />);
    expect(screen.getByRole("main")).toBeInTheDocument();
  });

  test("renders one Article per post, inside main", () => {
    render(<ArticleList posts={posts} />);
    const main = screen.getByRole("main");
    expect(within(main).getAllByRole("article")).toHaveLength(posts.length);
  });

  test("displays each post's title, date and preview", () => {
    render(<ArticleList posts={posts} />);
    posts.forEach(({ title, date, preview }) => {
      expect(screen.getByText(title)).toBeInTheDocument();
      expect(screen.getByText(date)).toBeInTheDocument();
      expect(screen.getByText(preview)).toBeInTheDocument();
    });
  });

  test("renders no articles when posts is empty", () => {
    render(<ArticleList posts={[]} />);
    expect(screen.queryAllByRole("article")).toHaveLength(0);
  });

  test("does not log a missing-key warning", () => {
    const spy = jest.spyOn(console, "error").mockImplementation(() => {});
    render(<ArticleList posts={posts} />);

    const keyWarnings = spy.mock.calls.filter((call) =>
      String(call[0]).includes("unique \"key\" prop")
    );
    expect(keyWarnings).toHaveLength(0);

    spy.mockRestore();
  });
});