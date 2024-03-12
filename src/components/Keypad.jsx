import Button from "./Button.jsx";

const Keypad = () => {
  return (
    <div className="grid grid-cols-4 gap-2">
      <Button
        className="bg-blue"
        onClick={() => {
          console.log("C");
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
      <Button className="bg-red" onClick={() => {}}>
        ÷
      </Button>
      <Button onClick={() => {}}>7</Button>
      <Button onClick={() => {}}>8</Button>
      <Button onClick={() => {}}>9</Button>
      <Button className="bg-red" onClick={() => {}}>
        X
      </Button>
      <Button onClick={() => {}}>4</Button>
      <Button onClick={() => {}}>5</Button>
      <Button onClick={() => {}}>6</Button>
      <Button className="bg-red" onClick={() => {}}>
        -
      </Button>
      <Button onClick={() => {}}>1</Button>
      <Button onClick={() => {}}>2</Button>
      <Button onClick={() => {}}>3</Button>
      <Button className="bg-red" onClick={() => {}}>
        +
      </Button>
      <Button className="col-span-2" onClick={() => {}}>
        0
      </Button>
      <Button onClick={() => {}}>.</Button>
      <Button className="bg-red" onClick={() => {}}>
        =
      </Button>
    </div>
  );
};

export default Keypad;
