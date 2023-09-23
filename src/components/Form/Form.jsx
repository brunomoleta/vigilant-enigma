import React from "react";
import { BmiContext } from "../../assets/providers/userContext";

function Form() {
  const { unit, setUnit, height, setHeight, weight, setWeight, bmi, setBmi } =
    React.useContext(BmiContext);

  console.log(unit);
  return (
    <>
      <h3>Enter your details below:</h3>
      <form>
        <label htmlFor="metric">Metric</label>
        <input
          onChange={(event) => setUnit(event.target.value)}
          value="metric"
          id="metric"
          name="unit-type"
          type="radio"
          checked={unit === "metric"}
        />
        <label htmlFor="imperial">Imperial</label>
        <input
          onChange={(event) => setUnit(event.target.value)}
          value="imperial"
          id="imperial"
          name="unit-type"
          type="radio"
          checked={unit === "imperial"}
        />
      </form>
      <p>{unit}</p>
    </>
  );
}

export default Form;
