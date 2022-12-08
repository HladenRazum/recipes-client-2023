import React from "react";

type Props = {};

const LoginForm = (props: Props) => {
  return (
    <form>
      <input defaultValue='username' />
      <input defaultValue='password' />
      <button type='submit'>Submit</button>
    </form>
  );
};

export default LoginForm;
