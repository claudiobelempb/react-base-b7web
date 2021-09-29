import { useState, useEffect } from "react";
import { InputDefaultContainer } from "./styles";

const InputDefault = ({ placeholder, type, onChanger }) => {
  const [value, setValue] = useState("");

  useEffect(() => {
    onChanger(value);
  }, [onChanger, value]);

  return (
    <>
      <InputDefaultContainer
        type={type ?? "text"}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder={placeholder ?? "Search..."}
      />
    </>
  );
};

export { InputDefault };
