import Button from "./Button.jsx";
const Keypad = () => {
  return (
    <div className="Keypad">
      <Button onClick={() => console.log("Button clicked!")}>C</Button>
      <Button onClick={() => console.log("Button clicked!")}>+/-</Button>
      <Button onClick={() => console.log("Button clicked!")}>%</Button>
      <Button onClick={() => console.log("Button clicked!")}>/</Button>
      <Button onClick={() => console.log("Button clicked!")}>7</Button>
      <Button onClick={() => console.log("Button clicked!")}>8</Button>
      <Button onClick={() => console.log("Button clicked!")}>9</Button>
      <Button onClick={() => console.log("Button clicked!")}>*</Button>
      <Button onClick={() => console.log("Button clicked!")}>4</Button>
      <Button onClick={() => console.log("Button clicked!")}>5</Button>
      <Button onClick={() => console.log("Button clicked!")}>6</Button>
      <Button onClick={() => console.log("Button clicked!")}>-</Button>
      <Button onClick={() => console.log("Button clicked!")}>1</Button>
      <Button onClick={() => console.log("Button clicked!")}>2</Button>
      <Button onClick={() => console.log("Button clicked!")}>3</Button>
      <Button onClick={() => console.log("Button clicked!")}>+</Button>
      <Button onClick={() => console.log("Button clicked!")}>0</Button>
      <Button onClick={() => console.log("Button clicked!")}>.</Button>
      <Button onClick={() => console.log("Button clicked!")}>=</Button>
    </div>
  );
};

export default Keypad;
