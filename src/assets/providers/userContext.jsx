import { createContext, useState } from "react";

export const BmiContext = createContext({});

// eslint-disable-next-line react/prop-types
export const BmiProvider = ({ children }) => {
  // const {} = useContext()

  const [unit, setUnit] = useState("metric");
  const [height, setHeight] = useState("0");
  const [weight, setWeight] = useState("0");
  const [bmi, setBmi] = useState(
    unit === "metric"
      ? (weight / height) * height
      : ((703 * weight) / height) * height
  );

  return (
    <BmiContext.Provider
      value={{
        unit,
        setUnit,
        height,
        setHeight,
        weight,
        setWeight,
        bmi,
        setBmi,
      }}
    >
      {children}
    </BmiContext.Provider>
  );
};
