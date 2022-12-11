import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { BASE_URL } from "../../../constants";

type Props = {};

type Inputs = {
  username: string;
  password: string;
};

const registerUser = async (formData: Inputs) => {
  try {
    const response = await fetch(`${BASE_URL}/users/create`, {
      method: "POST",
      headers: {
        ContentType: "Application/json",
      },
      body: JSON.stringify({
        username: formData.username,
        password: formData.password,
      }),
    });

    if (response.status > 205) {
      throw new Error("Something went wrong");
    }

    try {
      const data = await response.json();
      if (!data) {
        throw new Error("Could not get the JSON object from request");
      }
      console.log(data);
    } catch (error: any) {
      console.log(error.message);
    }
  } catch (error: any) {
    console.log(error.message);
  }
};

const RegisterForm = (props: Props) => {
  const { register, handleSubmit } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    registerUser(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input defaultValue='username' {...register("username")} />
      <input defaultValue='password' {...register("password")} />
      <button type='submit'>Submit</button>
    </form>
  );
};

export default RegisterForm;
