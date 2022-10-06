import Input from "../../components/Input";
import { useForm } from "react-hook-form";
import Form from "../../components/Form";
import Link from "next/link";
import { useRouter } from "next/router";
import Alert from "../../components/Alert";
import Button from "../../components/Button";
import { signIn } from "next-auth/react";
import { useState } from "react";

function Login() {
  const { register, handleSubmit, formState } = useForm();
  const [error, setError] = useState(null);
  const { errors } = formState;
  const { email, password } = errors;
  const router = useRouter();
  // onSubmit function
  const onSubmit = async (data) => {
    // actual login process goes to here
    const result = await signIn("credentials", {
      ...data,
      redirect: false,
    });

    if (!result.ok) {
      // do your stuff...
      setError(result.error);
      return;
    }
    setError(null);
    router.push("/");
  };
  return (
    <div className="h-[calc(100vh-82px)] flex items-center justify-center">
      <Form>
        <h2 className="text-center font-medium text-2xl mt-2 mb-4">
          <span className="text-emerald-500">Login </span> Please
        </h2>
        {error && <Alert danger errorMessage={error} />}
        <form className="flex flex-col gap-2" onSubmit={handleSubmit(onSubmit)}>
          <Input
            isError={email?.type === "required"}
            errorMessage={email?.message}
            type="email"
            placeholder="Enter Your Email"
            label="Email"
            {...register("email", {
              required: "This email field is required.",
            })}
          />
          <Input
            isError={password?.type === "required"}
            errorMessage={password?.message}
            type="password"
            placeholder="Enter Your Password"
            label="Password"
            {...register("password", {
              required: "This password field is required.",
            })}
          />
          <Button type="submit" fill>
            Login
          </Button>
          <p>
            Don&apos;t have an account ?
            <strong>
              <Link href="/signup">
                <a className="hover:underline text-emerald-500"> Sign up </a>
              </Link>
            </strong>
            please.
          </p>
        </form>
      </Form>
    </div>
  );
}

export default Login;
