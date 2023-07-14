import { useState } from "react";

const useCounter = (initial) => {
  const [counter, setCounter] = useState(initial);

  const sumar = () => {
    setCounter(counter + 1);
  };

  const restar = () => {
    setCounter(counter - 1);
  };

  const reset = () => {
    setCounter(initial);
  };

  return { counter, sumar, restar, reset };
};

export default useCounter;
