import { buttonProps } from "@/types";
import clsx from "clsx";

const Button = ({
  type,
  text,
  onClick,
  actionButton,
  actionButtonText,
  bgColor
}: buttonProps) => {
  return (
    <div>
      <button
        onClick={onClick}
        type={type}
        className={clsx(
          actionButtonText &&
          "text-white hover:bg-blue-500 focus:ring-4 font-medium rounded-lg text-sm px-[15px] py-[7.5px] me-2 mb-2 focus:outline-none",
          actionButton &&
            "text-white hover:bg-blue-500 focus:ring-4 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 focus:outline-none",
          `${bgColor} hover:${bgColor} font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 focus:outline-none`
        )}
      >
        {text}
      </button>
    </div>
  );
};

export default Button;