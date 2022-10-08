export const generateOtp = () => {
  // create 6 digit otp number
  const otpFull = Math.random() * 1000000;
  const otp = parseInt(otpFull);
  if (otp.toString().length !== 6) {
    return parseInt(otpFull * 10);
  }
  return otp;
};
