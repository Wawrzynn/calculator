import Display from "./Display.jsx";
import Keypad from "./Keypad.jsx";

const Calculator = () => {
  return (
    <div className="container m-auto mt-2 w-fit flex flex-col pb-10 pt-5 px-5 justify-center items-center bg-dark-blue rounded-3xl">
      <Display value="0" />
      <Keypad />
    </div>
  );
};

export default Calculator;
