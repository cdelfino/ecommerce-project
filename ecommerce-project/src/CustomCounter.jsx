import useCounter from "./utils/hooks/useCounter";

const CustomCounter = () => {
  const { counter, reset, sumar, restar } = useCounter(15);

  return (
    <div>
      <h3>{counter}</h3>
      <button onClick={sumar}>sumar</button>
      <button onClick={restar}>restar</button>
      <button onClick={reset}>resetear</button>
    </div>
  );
};

export default CustomCounter;
