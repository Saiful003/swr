import Input from "../../components/Input";
import { SubmitHandler, useForm } from "react-hook-form";
import Form from "../../components/Form";
import Link from "next/link";
import { useRouter } from "next/router";
import Alert from "../../components/Alert";
import { useState } from "react";
import supabase from "../../config/supabase";

interface IInput {
  email: string;
  password: string;
}

function Login() {
  const { register, handleSubmit, formState } = useForm<IInput>();
  const { errors } = formState;
  const { email, password } = errors;
  const [signInError, setSignInError] = useState<string | null>(null);
  const router = useRouter();

  // onSubmit function
  const onSubmit: SubmitHandler<IInput> = async ({ email, password }) => {
    // actual login process goes to here
    const { error } = await supabase.auth.signIn({
      email,
      password,
    });
    if (error) {
      setSignInError(error.message);
    }

    if (!error) {
      setSignInError(null);
      router.push("/");
    }
  };

  return (
    <div className="h-[calc(100vh-81px)]  flex items-center justify-center">
      <Form>
        {signInError && <Alert danger errorMessage={signInError!} />}
        <h2 className="text-center font-medium text-2xl mt-2 mb-4">
          Login Please
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
          <Input
            isError={password?.type === "required"}
            errorMessage={password?.message!}
            type="password"
            placeholder="Enter Your Password"
            label="Password"
            {...register("password", {
              required: "This password field is required.",
            })}
          />

          <button
            type="submit"
            className="px-3 py-2 mt-2 rounded-sm bg-emerald-500 hover:bg-emerald-600 text-white font-medium"
          >
            Login
          </button>
          <p>
            Don't have an account ?
            <Link href="/signup">
              <a className="font-medium text-emerald-600">
                &apos Sign Up &apos
              </a>
            </Link>
          </p>
        </form>
      </Form>
    </div>
  );
}

export default Login;
