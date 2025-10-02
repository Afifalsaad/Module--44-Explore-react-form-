import { useState } from "react";

const useInputField = (defaultValue) => {
  const [inputValue, setInputValue] = useState(defaultValue);

  const handleFieldOnChange = (e) => {
    setInputValue(e.target.value);
  };
  return [inputValue, handleFieldOnChange];
};

export default useInputField;
