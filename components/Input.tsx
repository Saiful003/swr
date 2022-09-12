import { forwardRef } from "react";

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
    return (
      <div>
        <label className="block mb-1 text-gray-500" htmlFor={name}>
          {label} :
        </label>
        <input
          className="border w-full focus:outline-none p-2"
          placeholder={placeholder}
          type={type}
          id={name}
          name={name}
          {...rest}
          ref={ref}
        />
        {isError && (
          <span className="text-red-500 text-sm">{errorMessage}</span>
        )}
      </div>
    );
  }
);
Input.displayName = "CustomInputComponent";
export default Input;
