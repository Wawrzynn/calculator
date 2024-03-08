import Display from "./Display.jsx";
import Keypad from "./Keypad.jsx";

const Calculator = () => {
  return (
    <div className="flex flex-col w-1/2 m-auto justify-center items-center bg-gradient-to-br from-gray-700 to-gray-950 rounded-2xl">
      <h1 className="text-4xl text-white w-full flex items-start ml-10">
        Calculator
      </h1>
      <Display value="0" />
      <Keypad />
    </div>
  );
};

export default Calculator;
