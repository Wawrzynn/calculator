import { render, screen } from "@testing-library/react";
import Display from "../Display";

describe("Display component", () => {
  it("renders the value passed as prop", () => {
    render(<Display value="123" />);
    const valueElement = screen.getByText(/123/i);
    expect(valueElement).toBeInTheDocument();
  });

  it("renders correctly when value is an empty string", () => {
    render(<Display value="" />);
    const valueElement = screen.queryByText(/\d+/);
    expect(valueElement).not.toBeInTheDocument();
  });

  it("renders correctly when value is zero", () => {
    render(<Display value="0" />);
    const valueElement = screen.getByText(/0/i);
    expect(valueElement).toBeInTheDocument();
  });

  it("renders correctly when value is a negative number", () => {
    render(<Display value="-123" />);
    const valueElement = screen.getByText(/-123/i);
    expect(valueElement).toBeInTheDocument();
  });

  it("renders correctly when value is a decimal number", () => {
    render(<Display value="123.45" />);
    const valueElement = screen.getByText(/123.45/i);
    expect(valueElement).toBeInTheDocument();
  });

  it("renders correctly when value is a large number", () => {
    render(<Display value="1234567890" />);
    const valueElement = screen.getByText(/1234567890/i);
    expect(valueElement).toBeInTheDocument();
  });
});
