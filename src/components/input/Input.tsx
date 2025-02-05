import { inputProps } from "@/types";

const Input = ({ name, type, placeholder, value }: inputProps) => {
  return (
    <div>
      <input
        name={name}
        type={type}
        placeholder={placeholder}
        value={value}
        className="block w-full p-4 mx-2 border rounded-lg text-base bg-gray-100 border-gray-400 placeholder-gray-900 text-black focus:border-gray-400 focus:outline focus:outline-gray-400"
      />
    </div>
  );
};

export default Input;