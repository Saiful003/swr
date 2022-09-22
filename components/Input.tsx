import { forwardRef, useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

interface IProps {
  label: string;
  type: string;
  placeholder: string;
  name: string;
  isError?: boolean;
  errorMessage: string;
}

const Input = forwardRef<HTMLInputElement, IProps>(
  ({ label, name, type, placeholder, isError, errorMessage, ...rest }, ref) => {
    const [passwordType, setPasswordType] = useState(true);

    const handleTypeSelection = (inputType: string) => {
      if (inputType === "password") {
        if (passwordType) {
          return "password";
        }
        return "text";
      }
      return inputType;
    };

    return (
      <div>
        <label className="block mb-1 text-gray-400 font-medium" htmlFor={name}>
          {label} :
        </label>
        <div className="relative">
          <input
            className="border w-full focus:outline-none focus:border-emerald-300 p-2"
            placeholder={placeholder}
            type={handleTypeSelection(type)}
            id={name}
            name={name}
            {...rest}
            ref={ref}
          />
          {type === "password" && (
            <div
              onClick={() => setPasswordType(!passwordType)}
              className="absolute text-2xl right-2 top-0 bottom-0 flex items-center cursor-pointer"
            >
              {passwordType ? (
                <AiOutlineEyeInvisible className="text-gray-500" />
              ) : (
                <AiOutlineEye className="text-gray-500" />
              )}
            </div>
          )}
        </div>
        {isError && (
          <span className="text-red-500 text-sm">{errorMessage}</span>
        )}
      </div>
    );
  }
);
Input.displayName = "CustomComponent";
export default Input;
