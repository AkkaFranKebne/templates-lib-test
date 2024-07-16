import React from "react";
import "./Button.css";

export interface ButtonProps {
  label: string;
}

const Button = (props: ButtonProps) => {
  return <button className='bg-sky-500 hover:bg-sky-700'>{props.label}</button>;
};

export default Button;