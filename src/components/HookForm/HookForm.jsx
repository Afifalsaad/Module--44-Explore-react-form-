import React, { useState } from "react";
import useInputField from "../../hooks/UseInputField/UseInputField";

const HookForm = () => {
  const [name, setName] = useInputField("");
  const [email, emailOnChange] = useInputField("");
  const [password,passwordOnchange] = useInputField('')

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("submitted", name, email, password);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input defaultValue={name} onChange={setName} type="text" />
        <br />
        <input type="email" onChange={emailOnChange} name="" id="" />
        <br />
        <input type="password" onChange={passwordOnchange} name="" id="" />
        <br />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default HookForm;
