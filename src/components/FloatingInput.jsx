import { useState } from "react";

export default function FloatingInput({
  label,
  name,
  type = "text",
  placeholder,
  value,
  onChange,
  error,
  required = true,
}) {
  const [isFocused, setIsFocused] = useState(false);
  const hasValue = value && value.trim() !== "";

  return (
    <div className="relative mb-6">
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        className={`w-full px-4 py-3 border-2 rounded-lg focus:outline-none transition duration-200 peer ${
          error
            ? "border-red-500 focus:border-red-600"
            : isFocused || hasValue
              ? "border-purple-500"
              : "border-gray-200"
        }`}
      />

      <label
        htmlFor={name}
        className={`absolute left-4 transition-all duration-200 pointer-events-none ${
          isFocused || hasValue
            ? "top-0 -translate-y-2.5 text-xs font-medium text-purple-600 bg-white px-1"
            : "top-3.5 text-base text-gray-500"
        } peer-focus:top-0 peer-focus:-translate-y-2.5 peer-focus:text-xs peer-focus:text-purple-600 peer-focus:bg-white peer-focus:px-1`}
      >
        {label}
        {required && <span className="text-red-500 ml-1">*</span>}
      </label>

      {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
    </div>
  );
}
