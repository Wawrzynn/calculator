import { useState } from "react";

import Button from "./Button.jsx";

const Keypad = ({ setDisplayValue }) => {
  const [operator, setOperator] = useState(null);
  const [firstValue, setFirstValue] = useState(null);
  const [secondValue, setSecondValue] = useState(null);

  const handleNumberClick = (number) => {
    if (operator === null) {
      if (firstValue === null) {
        setFirstValue(number);
        setDisplayValue(number);
      } else {
        setFirstValue(firstValue + number);
        setDisplayValue(firstValue + number);
      }
    } else {
      if (secondValue === null) {
        setSecondValue(number);
        setDisplayValue(`${firstValue} ${operator} ${number}`);
      } else {
        setSecondValue(secondValue + number);
        setDisplayValue(`${firstValue} ${operator} ${secondValue + number}`);
      }
    }
  };

  const handleOperatorClick = (operator) => {
    if (firstValue === null) {
      setFirstValue("0");
    }
    if (secondValue !== null) {
    }
    setOperator(operator);
    setDisplayValue(`${firstValue || "0"} ${operator}`);
  };

  const handleEqualsClick = () => {
    let result = 0;
    if (operator === "+") {
      result = parseInt(firstValue) + parseInt(secondValue);
      setDisplayValue(result);
      setFirstValue(result);
      setSecondValue(null);
      setOperator(null);
    } else if (operator === "-") {
      result = parseInt(firstValue) - parseInt(secondValue);
      setDisplayValue(result);
      setFirstValue(result);
      setSecondValue(null);
      setOperator(null);
    } else if (operator === "*") {
      result = parseInt(firstValue) * parseInt(secondValue);
      setDisplayValue(result);
      setFirstValue(result);
      setSecondValue(null);
      setOperator(null);
    } else if (operator === "÷") {
      result = parseInt(firstValue) / parseInt(secondValue);
      setDisplayValue(result);
      setFirstValue(result);
      setSecondValue(null);
      setOperator(null);
    }
  };

  const handleClearClick = () => {
    setDisplayValue("0");
    setOperator(null);
    setFirstValue(null);
    setSecondValue(null);
  };

  const handlePlusMinusClick = () => {};

  const handlePercentageClick = () => {};

  const handleDotClick = () => {};

  const handleZeroClick = () => {};

  return (
    <div className="grid grid-cols-4 gap-2">
      <Button
        className="bg-blue"
        onClick={() => {
          handleClearClick();
        }}
      >
        C
      </Button>
      <Button className="bg-blue" onClick={() => {}}>
        + / -
      </Button>
      <Button className="bg-blue" onClick={() => {}}>
        %
      </Button>
      <Button
        className="bg-red"
        onClick={() => {
          handleOperatorClick("÷");
        }}
      >
        ÷
      </Button>
      <Button
        className="bg-light-grey"
        onClick={() => {
          handleNumberClick("7");
        }}
      >
        7
      </Button>
      <Button
        className="bg-light-grey"
        onClick={() => {
          handleNumberClick("8");
        }}
      >
        8
      </Button>
      <Button
        className="bg-light-grey"
        onClick={() => {
          handleNumberClick("9");
        }}
      >
        9
      </Button>
      <Button
        className="bg-red"
        onClick={() => {
          handleOperatorClick("*");
        }}
      >
        X
      </Button>
      <Button
        className="bg-light-grey"
        onClick={() => {
          handleNumberClick("4");
        }}
      >
        4
      </Button>
      <Button
        className="bg-light-grey"
        onClick={() => {
          handleNumberClick("5");
        }}
      >
        5
      </Button>
      <Button
        className="bg-light-grey"
        onClick={() => {
          handleNumberClick("6");
        }}
      >
        6
      </Button>
      <Button
        className="bg-red"
        onClick={() => {
          handleOperatorClick("-");
        }}
      >
        -
      </Button>
      <Button
        className="bg-light-grey"
        onClick={() => {
          handleNumberClick("1");
        }}
      >
        1
      </Button>
      <Button
        className="bg-light-grey"
        onClick={() => {
          handleNumberClick("2");
        }}
      >
        2
      </Button>
      <Button
        className="bg-light-grey"
        onClick={() => {
          handleNumberClick("3");
        }}
      >
        3
      </Button>
      <Button
        className="bg-red"
        onClick={() => {
          handleOperatorClick("+");
        }}
      >
        +
      </Button>
      <Button className="col-span-2 bg-light-grey" onClick={() => {}}>
        0
      </Button>
      <Button className="bg-light-grey" onClick={() => {}}>
        .
      </Button>
      <Button
        className="bg-red"
        onClick={() => {
          handleEqualsClick();
        }}
      >
        =
      </Button>
    </div>
  );
};

export default Keypad;
