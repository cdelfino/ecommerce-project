/* eslint-disable react/prop-types */
import { useState } from "react";
import Counter from "./Counter";

const CounterContainer = ({ stock, onAdd }) => {
  const [counter, setCounter] = useState(1);

  const sumar = () => {
    counter < stock
      ? setCounter(counter + 1)
      : alert("Cantidad máxima alcanzada");
  };

  const restar = () => {
    counter > 1 && setCounter(counter - 1);
  };

  const dataProps = {
    counter,
    sumar,
    restar,
    onAdd,
  };

  return <Counter {...dataProps} />;
};


export default CounterContainer;
