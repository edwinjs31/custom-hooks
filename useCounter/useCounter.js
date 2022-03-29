import { useState } from "react";

//CUSTOM HOOK QUE SE ENCARGA DE MANEAR EL CONTADOR
export const useCounter = (initialState = 10) => {

  const [counter, setCounter] = useState(initialState);


  const increment = () => {
    setCounter(counter + 1);
  };

  const decrement = () => {
    setCounter(counter - 1);
  };

  const reset = () => {
    setCounter(initialState);
  };

  //puede retornar un Array u Objeto con la logica del hook.
  return { counter, increment, decrement, reset };
};
