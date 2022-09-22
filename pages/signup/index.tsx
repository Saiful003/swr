import Input from "../../components/Input";
import { SubmitHandler, useForm } from "react-hook-form";
import Form from "../../components/Form";
import Link from "next/link";
import { useAuth } from "../../context/authContext";
import { useRouter } from "next/router";
import Alert from "../../components/Alert";
import supabase from "../../config/supabase";
import { useState } from "react";

interface IInput {
  email: string;
  password: string;
  confirm_password: string;
}

function SignUp() {
  const { register, handleSubmit, formState } = useForm<IInput>();
  const { errors } = formState;
  const { email, password, confirm_password } = errors;
  const router = useRouter();
  const [signUpError, setSignUpError] = useState<string | null>(null);

  // onSubmit function
  const onSubmit: SubmitHandler<IInput> = async ({
    email,
    password,
    confirm_password,
  }) => {
    // actual sign up process goes to here

    if (password !== confirm_password) {
      setSignUpError("Password do not match");
      return;
    }

    const { error } = await supabase.auth.signUp({
      email,
      password,
    });
    if (error) {
      setSignUpError(error.message);
    }

    if (!error) {
      setSignUpError(null);
      router.push("/");
    }
  };

  return (
    <div className="h-[calc(100vh-81px)]  flex items-center justify-center">
      <Form>
        <h2 className="text-center font-medium text-2xl mt-2 mb-4">
          Sign Up Please
        </h2>
        {signUpError && <Alert danger errorMessage={signUpError!} />}

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
          <Input
            isError={confirm_password?.type === "required"}
            errorMessage={confirm_password?.message!}
            type="password"
            placeholder="Enter Your Confirm Password"
            label="Confirm Password"
            {...register("confirm_password", {
              required: "This confirm password field is required.",
            })}
          />

          <button
            type="submit"
            className="px-3 py-2 mt-2 rounded-sm bg-emerald-500 hover:bg-emerald-600 text-white font-medium"
          >
            Sign up
          </button>
          <p>
            Already have an account ?
            <strong>
              <Link href="/login">
                <a className="font-medium text-emerald-600 hover:underline">
                  {" "}
                  Login{" "}
                </a>
              </Link>
            </strong>
            please.
          </p>
        </form>
      </Form>
    </div>
  );
}

export default SignUp;
