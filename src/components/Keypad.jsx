import { useState, useEffect } from "react";

import Button from "./Button.jsx";

const Keypad = ({ setDisplayValue }) => {
  const [operator, setOperator] = useState(null);
  const [firstValue, setFirstValue] = useState(null);
  const [secondValue, setSecondValue] = useState(null);
  const [result, setResult] = useState(null);

  useEffect(() => {
    if (firstValue !== null && secondValue !== null && operator !== null) {
      switch (operator) {
        case "+":
          setResult(
            parseFloat(
              (parseFloat(firstValue) + parseFloat(secondValue)).toFixed(6),
            ),
          );
          break;
        case "-":
          setResult(
            parseFloat(
              (parseFloat(firstValue) - parseFloat(secondValue)).toFixed(6),
            ),
          );
          break;
        case "*":
          setResult(
            parseFloat(
              (parseFloat(firstValue) * parseFloat(secondValue)).toFixed(6),
            ),
          );
          break;
        case "÷":
          setResult(
            parseFloat(
              (parseFloat(firstValue) / parseFloat(secondValue)).toFixed(6),
            ),
          );
          break;
        default:
          break;
      }
    }
  }, [firstValue, secondValue, operator]);

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
      handleEqualsClick();
      setOperator(operator);
      setDisplayValue(`${result || "0"} ${operator}`);
    } else {
      setOperator(operator);
      setDisplayValue(`${firstValue || "0"} ${operator}`);
    }
  };

  const handleEqualsClick = () => {
    if (firstValue !== null && secondValue !== null && operator !== null) {
      setFirstValue(result);
      setSecondValue(null);
      setOperator(null);
      setDisplayValue(result);
    }
  };

  const handleClearClick = () => {
    setDisplayValue("0");
    setOperator(null);
    setFirstValue(null);
    setSecondValue(null);
  };

  const handlePlusMinusClick = () => {
    if (firstValue !== null && secondValue === null && operator === null) {
      setFirstValue(firstValue * -1);
      setDisplayValue(firstValue * -1);
    } else if (
      firstValue !== null &&
      secondValue === null &&
      operator !== null
    ) {
      setFirstValue(firstValue * -1);
      setDisplayValue(`${firstValue * -1} ${operator}`);
    } else if (secondValue !== null && secondValue !== "0") {
      setSecondValue(secondValue * -1);
      setDisplayValue(`${firstValue} ${operator} ${secondValue * -1}`);
    }
  };

  const handlePercentageClick = () => {
    if (firstValue !== null && secondValue === null && operator === null) {
      setFirstValue(firstValue / 100);
      setDisplayValue(firstValue / 100);
    } else if (
      firstValue !== null &&
      secondValue === null &&
      operator !== null
    ) {
      setFirstValue(firstValue / 100);
      setDisplayValue(`${firstValue / 100} ${operator}`);
    } else if (secondValue !== null) {
      setSecondValue(secondValue / 100);
      setDisplayValue(`${firstValue} ${operator} ${secondValue / 100}`);
    }
  };

  const handleDotClick = () => {
    if (firstValue === null) {
      setFirstValue("0.");
      setDisplayValue("0.");
    } else if (
      secondValue === null &&
      operator === null &&
      !firstValue.includes(".")
    ) {
      setFirstValue(firstValue + ".");
      setDisplayValue(firstValue + ".");
    } else if (
      secondValue === null &&
      operator !== null &&
      !firstValue.includes(".")
    ) {
      setFirstValue(firstValue + ".");
      setDisplayValue(`${firstValue + "."} ${operator}`);
    } else if (secondValue !== null && !secondValue.includes(".")) {
      setSecondValue(secondValue + ".");
      setDisplayValue(`${firstValue} ${operator} ${secondValue + "."}`);
    }
  };

  const handleZeroClick = () => {
    if (firstValue !== null && secondValue === null && operator === null) {
      setFirstValue(firstValue + "0");
      setDisplayValue(firstValue + "0");
    } else if (
      firstValue !== null &&
      secondValue === null &&
      operator !== null
    ) {
      setSecondValue("0");
      setDisplayValue(`${firstValue} ${operator} 0`);
    } else if (secondValue !== null && secondValue !== "0") {
      setSecondValue(secondValue + "0");
      setDisplayValue(`${firstValue} ${operator} ${secondValue + "0"}`);
    }
  };

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
      <Button
        className="bg-blue"
        onClick={() => {
          handlePlusMinusClick();
        }}
      >
        + / -
      </Button>
      <Button
        className="bg-blue"
        onClick={() => {
          handlePercentageClick();
        }}
      >
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
      <Button
        className="col-span-2 bg-light-grey"
        onClick={() => {
          handleZeroClick();
        }}
      >
        0
      </Button>
      <Button
        className="bg-light-grey"
        onClick={() => {
          handleDotClick();
        }}
      >
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
