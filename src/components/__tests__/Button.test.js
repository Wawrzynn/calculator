import { render, fireEvent } from "@testing-library/react";
import Button from "../Button.jsx";

describe("Button component", () => {
  it("renders button with provided text", () => {
    const { getByText } = render(<Button>Click me</Button>);
    expect(getByText("Click me")).toBeInTheDocument();
  });

  it("triggers onClick event when clicked", () => {
    const handleClick = jest.fn();
    const { getByText } = render(
      <Button onClick={handleClick}>Click me</Button>,
    );
    fireEvent.click(getByText("Click me"));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it("applies additional CSS classes when provided", () => {
    const { getByText } = render(
      <Button className="extra-class">Click me</Button>,
    );
    expect(getByText("Click me")).toHaveClass("extra-class");
  });
});
