import React, { useContext, useState } from "react";
import { GlobalContext } from "./Context/GlobalState";

export const AddTransaction = () => {
  const [text, setText] = useState("");
  const [amount, setAmount] = useState(0);

  const { addTransaction } = useContext(GlobalContext);

  const onSubmit = eve => {
    eve.preventDefault();

    const newTransaction = {
      id: Math.floor(Math.random() * 100000000),
      text,
      amount: +amount,
    };

    addTransaction(newTransaction);
  };
  return (
    <>
      <h3>Añadir nueva transaccion</h3>
      <form onSubmit={onSubmit}>
        <div className="form-control">
          <label htmlFor="text">Trnsaccion</label>
          <input
            type="text"
            value={text}
            onChange={ev => setText(ev.target.value)}
            placeholder="Ingresa la Transaccion..."
          />
        </div>
        <div className="form-control">
          <label htmlFor="amount">
            Monto <br />
            Negativo - gastos
            <br /> positivo + ingresos
          </label>
          <input
            type="number"
            value={amount}
            onChange={ev => setAmount(ev.target.value)}
            placeholder="Ingresa el monto..."
          />
        </div>
        <button className="btn">Añadir transaccion</button>
      </form>
    </>
  );
};
