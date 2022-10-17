import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Form from "./Form";
import Input from "./Input";
import { useRouter } from "next/router";
import Button from "./Button";
import customAxios from "../config/axios";
import Alert from "./Alert";
import { useTimer } from "../hooks/useTimer";
import { useTheme } from "../hooks/useTheme";

function OtpPreview({ email }) {
  const { register, handleSubmit, formState } = useForm();
  const { errors } = formState;
  const { otp } = errors;
  const router = useRouter();
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [resendLoading, setResendLoading] = useState(false);
  const { otpExpireTime, start } = useTimer({ duration: 60 });
  const { isLightTheme } = useTheme();

  // resend otp
  const resendOtp = async () => {
    // enable loading state
    setResendLoading(true);

    await customAxios.post("/signup/resendOtp", { email });
    // call expire timer
    start();
    setResendLoading(false);
  };

  const onSubmit = async (data) => {
    setLoading(true);
    try {
      await customAxios.post("/signup/verifyOtp", { ...data, email });
      setLoading(false);
      setError(null);
      router.push("/login");
    } catch (err) {
      setError(err.response.data.message);
      setLoading(false);
    }
  };

  return (
    <div className="h-[calc(100vh-82px)]  flex items-center justify-center">
      <Form>
        <p className={`${!isLightTheme && "text-white"} font-bold`}>
          {otpExpireTime}
        </p>

        <h2
          className={`text-center font-medium text-2xl mt-2 mb-4 ${
            !isLightTheme && "text-white"
          }`}
        >
          <span className="text-emerald-500"> Email-OTP </span> Verification
        </h2>
        {error && <Alert danger errorMessage={error} />}
        <form onSubmit={handleSubmit(onSubmit)}>
          <Input
            isError={otp?.type === "required"}
            errorMessage={otp?.message}
            type="text"
            placeholder="Enter Your OTP"
            label="OTP Number"
            {...register("otp", {
              required: "Please enter your OTP Number",
            })}
          />

          {!otpExpireTime && (
            <a
              className={` inline-block mt-2 py-1 px-2 border font-medium ${
                !isLightTheme && "text-white"
              }`}
              onClick={resendOtp}
              href="#"
            >
              {resendLoading ? "Sending..." : "Resend"}
            </a>
          )}
          <div className="mt-3">
            <Button type="submit" fill>
              {loading ? "Processing..." : "Submit"}
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
}

export default OtpPreview;
