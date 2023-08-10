/* eslint-disable react/prop-types */
import { useState } from "react";
import Counter from "./Counter";
import Swal from "sweetalert2";

const CounterContainer = ({ stock, onAdd, initial = 1 }) => {
  const [counter, setCounter] = useState(initial);
console.log(stock)
console.log(counter)
  const sumar = () => {
    counter < stock
      ? setCounter(counter + 1)
      : Swal.fire({
          icon: "error",
          text: "Lo sentimos, no hay suficiente stock.",
          toast: true,
          position: "bottom-end",
          showConfirmButton: false,
          timer: 3000,
          timerProgressBar: true,
        });
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
