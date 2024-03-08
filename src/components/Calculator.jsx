import Display from "./Display.jsx";
import Keypad from "./Keypad.jsx";

const Calculator = () => {
  return (
    <div>
      <h1 className="text-4xl">Calculator</h1>
      <Display value="0" />
      <Keypad />
    </div>
  );
};

export default Calculator;
