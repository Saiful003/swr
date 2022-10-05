import React from "react";
import { BsFillExclamationTriangleFill } from "react-icons/bs";
import classNames from "classnames";

function Alert({ errorMessage, successMessage, danger, success }) {
  return (
    <div
      className={classNames(
        "flex items-center rounded-sm gap-2 w-max mx-auto my-4 py-3 px-6",
        { "bg-red-200": danger },
        { "bg-green-200": success }
      )}
    >
      <div>
        <BsFillExclamationTriangleFill
          className={classNames(
            "text-xl",
            { "text-red-500": danger },
            { "text-green-500": success }
          )}
        />
      </div>
      <div
        className={classNames(
          "font-medium",
          { "text-red-600": danger },
          { "text-green-600": success }
        )}
      >
        {errorMessage || successMessage}
      </div>
    </div>
  );
}

export default Alert;
