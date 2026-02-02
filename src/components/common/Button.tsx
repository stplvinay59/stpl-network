// src/components/common/Button.tsx
import React from "react";

interface ButtonProps {
  text: string;
  variant: "primary" | "secondary";
  href: string;
}

const Button: React.FC<ButtonProps> = ({ text, variant, href }) => {
  const baseClasses = "px-6 py-3 rounded-lg font-semibold transition";
  const styles =
    variant === "primary"
      ? "bg-white text-blue-600 hover:bg-gray-100"
      : "border border-white text-white hover:bg-white hover:text-blue-600";

  return (
    <a href={href} className={`${baseClasses} ${styles}`}>
      {text}
    </a>
  );
};

export default Button;
