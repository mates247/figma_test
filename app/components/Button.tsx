import React from "react";

interface ButtonProps {
  title: string;
  style: string;
}
const Button: React.FC<ButtonProps> = ({ title, style }) => {
  return (
    <button
      className={`
       ${style === "primary" && "btn-primary"}
       ${style === "secondary" && "btn-secondary"}
       ${style === "black" && "btn-black"}
       
       btn`}
    >
      {title}
    </button>
  );
};

export default Button;
