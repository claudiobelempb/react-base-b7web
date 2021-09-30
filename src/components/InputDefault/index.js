import { useState, useEffect } from "react";
import { InputDefaultContainer } from "./styles";

const InputDefault = ({ placeholder, type, onChangerInput }) => {
  const [value, setValue] = useState("");

  useEffect(() => {
    if (onChangerInput) {
      onChangerInput(value);
    }
  }, [onChangerInput, value]);

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
