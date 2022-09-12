import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import Form from "../components/Form";
import Input from "../components/Input";
interface IInput {
  email: string;
}

function signup() {
  const { register, handleSubmit, formState } = useForm<IInput>();
  const { errors } = formState;
  const { email } = errors;

  // onSubmit function
  const onSubmit: SubmitHandler<IInput> = async (data) => {};

  return (
    <div className="h-[calc(100vh-81px)]  flex items-center justify-center">
      <Form>
        <h2 className="text-center font-medium text-2xl mt-2 mb-4">
          Create an Account
        </h2>
        <form className="flex flex-col gap-2" onSubmit={handleSubmit(onSubmit)}>
          <Input
            isError={email?.type === "required"}
            errorMessage={email?.message!}
            type="email"
            placeholder="Enter Your Email"
            label="Email"
            {...register("email", {
              required: "This email field is required.",
            })}
          />

          <button
            type="submit"
            className="px-3 py-2 mt-2 rounded-sm bg-emerald-500 hover:bg-emerald-600 text-white font-medium"
          >
            Create
          </button>
        </form>
      </Form>
    </div>
  );
}

export default signup;
