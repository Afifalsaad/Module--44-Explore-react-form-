import React, { useState } from "react";

const ControlledField = () => {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleFormData = (e) => {
    e.preventDefault();

    if(password.length < 6){
        setError('Password must be 6 character long')
    }
    else{
        setError('')
    }
  };

  const handleOnChange = (e) => {
    console.log(e.target.value);
    setPassword(e.target.value);

    // if (password.length < 6) {
    //     setError("Password must be 6 digit or longer");
    //   } else {
    //     setError("");
    //   }
  };

  return (
    <div>
      <form onSubmit={handleFormData}>
        <input
          type="email"
          name="email"
          id=""
          placeholder="Your Email"
          required
        />
        <br />
        <input
          type="password"
          name="password"
          onChange={handleOnChange}
          defaultValue={password}
          id=""
          placeholder="Your Password"
          required
        />
        <br />
        <input type="submit" value="Submit" />
      </form>
      <p style={{color: 'red'}}>
        <small>{error}</small>
      </p>
    </div>
  );
};

export default ControlledField;
