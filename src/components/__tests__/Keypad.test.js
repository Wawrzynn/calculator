import { render, fireEvent } from "@testing-library/react";
import Keypad from "../Keypad.jsx";

describe("Keypad component", () => {
  let setDisplayValue;

  beforeEach(() => {
    setDisplayValue = jest.fn();
  });

  it("should display 0 when clear button is clicked", () => {
    const { getByText } = render(<Keypad setDisplayValue={setDisplayValue} />);
    fireEvent.click(getByText("C"));
    expect(setDisplayValue).toHaveBeenCalledWith("0");
  });

  it("should display negative number when plus/minus button is clicked", () => {
    const { getByText } = render(<Keypad setDisplayValue={setDisplayValue} />);
    fireEvent.click(getByText("1"));
    fireEvent.click(getByText("+ / -"));
    expect(setDisplayValue).toHaveBeenCalledWith(-1);
  });

  it("should display percentage when percentage button is clicked", () => {
    const { getByText } = render(<Keypad setDisplayValue={setDisplayValue} />);
    fireEvent.click(getByText("1"));
    fireEvent.click(getByText("%"));
    expect(setDisplayValue).toHaveBeenCalledWith(0.01);
  });

  it("should display decimal number when dot button is clicked", () => {
    const { getByText } = render(<Keypad setDisplayValue={setDisplayValue} />);
    fireEvent.click(getByText("1"));
    fireEvent.click(getByText("."));
    expect(setDisplayValue).toHaveBeenCalledWith("1.");
  });

  it("should display correct result when equals button is clicked", () => {
    const { getByText } = render(<Keypad setDisplayValue={setDisplayValue} />);
    fireEvent.click(getByText("1"));
    fireEvent.click(getByText("+"));
    fireEvent.click(getByText("2"));
    fireEvent.click(getByText("="));
    expect(setDisplayValue).toHaveBeenCalledWith(3);
  });

  it("should handle division by zero", () => {
    const { getByText } = render(<Keypad setDisplayValue={setDisplayValue} />);
    fireEvent.click(getByText("1"));
    fireEvent.click(getByText("÷"));
    fireEvent.click(getByText("0"));
    fireEvent.click(getByText("="));
    expect(setDisplayValue).toHaveBeenCalledWith(Infinity);
  });

  it("should display correct number when number button is clicked", () => {
    const { getByText } = render(<Keypad setDisplayValue={setDisplayValue} />);
    fireEvent.click(getByText("1"));
    expect(setDisplayValue).toHaveBeenCalledWith("1");
  });

  it("should display correct result with + operator ", () => {
    const { getByText } = render(<Keypad setDisplayValue={setDisplayValue} />);
    fireEvent.click(getByText("1"));
    fireEvent.click(getByText("+"));
    fireEvent.click(getByText("2"));
    fireEvent.click(getByText("+"));
    expect(setDisplayValue).toHaveBeenCalledWith("3 +");
  });

  it("should display correct result with - operator ", () => {
    const { getByText } = render(<Keypad setDisplayValue={setDisplayValue} />);
    fireEvent.click(getByText("1"));
    fireEvent.click(getByText("-"));
    fireEvent.click(getByText("2"));
    fireEvent.click(getByText("-"));
    expect(setDisplayValue).toHaveBeenCalledWith("-1 -");
  });

  it("should display correct result with * operator ", () => {
    const { getByText } = render(<Keypad setDisplayValue={setDisplayValue} />);
    fireEvent.click(getByText("1"));
    fireEvent.click(getByText("X"));
    fireEvent.click(getByText("2"));
    fireEvent.click(getByText("+"));
    expect(setDisplayValue).toHaveBeenCalledWith("2 +");
  });

  it("should display correct result with ÷ operator ", () => {
    const { getByText } = render(<Keypad setDisplayValue={setDisplayValue} />);
    fireEvent.click(getByText("1"));
    fireEvent.click(getByText("÷"));
    fireEvent.click(getByText("2"));
    fireEvent.click(getByText("+"));
    expect(setDisplayValue).toHaveBeenCalledWith("0.5 +");
  });

  it("should display correct result with +- and - operator", () => {
    const { getByText } = render(<Keypad setDisplayValue={setDisplayValue} />);
    fireEvent.click(getByText("1"));
    fireEvent.click(getByText("-"));
    fireEvent.click(getByText("1"));
    fireEvent.click(getByText("+ / -"));
    expect(setDisplayValue).toHaveBeenCalledWith("1 - -1");
  });

  it("should display correct result with +- and + operator", () => {
    const { getByText } = render(<Keypad setDisplayValue={setDisplayValue} />);
    fireEvent.click(getByText("1"));
    fireEvent.click(getByText("+"));
    fireEvent.click(getByText("1"));
    fireEvent.click(getByText("+ / -"));
    expect(setDisplayValue).toHaveBeenCalledWith("1 + -1");
  });
});
