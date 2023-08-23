import React from "react";

interface ButtonProps {
  children?: React.ReactNode;
  action?: () => void;
  backgroundColor?: string;
  color?: string;
  height?: string;
  width?: string;
  radius?: string;
  border?: string;
  type?: "button" | "submit";
  className?: string;
}

const Button = ({
  children,
  action,
  color,
  backgroundColor,
  height,
  width,
  radius,
  border,
  type,
  className,
}: ButtonProps) => {
  return (
    <button
      onClick={action}
      type={type}
      className={className}
      style={{
        color: color,
        backgroundColor: backgroundColor,
        height,
        width,
        borderRadius: radius,
        border,
      }}
    >
      {children}
    </button>
  );
};

export default Button;
