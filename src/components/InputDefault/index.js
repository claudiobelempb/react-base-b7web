import { useState } from "react";
import { InputDefaultContainer } from "./styles";

const InputDefault = ({ placeholder, type, onKeyUpInput }) => {
  const [value, setValue] = useState("");
  // console.log(value);

  function handlerKeyUp(e) {
    if (e.keyCode === 13) {
      if (onKeyUpInput) {
        onKeyUpInput(value);
      }
      setValue("");
    }
  }

  return (
    <>
      <InputDefaultContainer
        type={type ?? "text"}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onKeyUp={handlerKeyUp}
        placeholder={placeholder ?? "Search..."}
      />
    </>
  );
};

export { InputDefault };
