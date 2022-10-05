import Input from "../../components/Input";
import { useForm } from "react-hook-form";
import Form from "../../components/Form";
import Link from "next/link";
import { useRouter } from "next/router";
import Alert from "../../components/Alert";
import { useState } from "react";
import Button from "../../components/Button";
import customAxios from "../../config/axios";
import { signIn } from "next-auth/react";
function SignUp() {
  const { register, handleSubmit, formState } = useForm();
  const { errors } = formState;
  const { firstname, lastname, email, password, confirmPassword } = errors;
  const router = useRouter();
  const [error, setError] = useState(null);

  // onSubmit function
  const onSubmit = async (data) => {
    // actual sign up process goes to here

    // const result = await signIn("credentials", {
    //   ...data,
    //   redirect: false,
    //   signUp: true,
    // });
    // console.log(result);

    // if (!result.ok) {
    //   // do your stuff...
    //   setError(result.error);
    //   return;
    // }
    // setError(null);
    // router.replace("/login");

    try {
      await customAxios.post("/signup", data);
      router.replace("/login");
    } catch (err) {
      const {
        data: { message },
      } = err.response;
      setError(message);
    }
  };

  return (
    <div className="h-[calc(100vh-82px)]  flex items-center justify-center">
      <Form>
        <h2 className="text-center font-medium text-2xl mt-2 mb-4">
          <span className="text-emerald-500"> Sign up </span> Please
        </h2>
        {error && <Alert danger errorMessage={error} />}

        <form className="flex flex-col gap-2" onSubmit={handleSubmit(onSubmit)}>
          <Input
            isError={firstname?.type === "required"}
            errorMessage={firstname?.message}
            type="text"
            placeholder="Enter Your First Name"
            label="First Name"
            {...register("firstname", {
              required: "Please enter your first name",
            })}
          />
          <Input
            isError={lastname?.type === "required"}
            errorMessage={lastname?.message}
            type="text"
            placeholder="Enter Your Last Name"
            label="Last Name"
            {...register("lastname", {
              required: "Please enter your last name",
            })}
          />
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
          <Input
            isError={confirmPassword?.type === "required"}
            errorMessage={confirmPassword?.message}
            type="password"
            placeholder="Enter Your Confirm Password"
            label="Confirm Password"
            {...register("confirmPassword", {
              required: "This confirm password field is required.",
            })}
          />
          <Button type="submit" fill>
            Sign up
          </Button>
          <p>
            Already have an account ?
            <strong>
              <Link href="/login">
                <a className="font-medium text-emerald-500 hover:underline">
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