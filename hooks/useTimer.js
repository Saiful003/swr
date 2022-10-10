import React, { useState } from "react";
import { useInterval } from "./useInterval";

export function useTimer({ duration }) {
  const [otpExpireTime, setIsOtpExpireTime] = useState(duration);

  // start timer
  const start = () => {
    setIsOtpExpireTime(duration);
  };

  // otp expire timer setup
  useInterval(() => {
    // custom logic
    // what we do after every 1sec
    setIsOtpExpireTime((prev) => {
      if (prev > 0) return prev - 1;
      return 0;
    });
  }, 1000);

  return { otpExpireTime, start };
}
