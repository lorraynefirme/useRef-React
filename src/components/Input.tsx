import React from "react";

interface InputProps{
    name: string;
    placeholder?: string;
    label: string;
    inputRef: React.RefObject<HTMLInputElement>;
}

export default function Input({name, placeholder, label, inputRef} : InputProps) {
  return (
    <div>
        <label htmlFor={name}>{label}</label>
        <input 
        type="text" 
        placeholder={placeholder}
        ref={inputRef}
        />
    </div>
  )
}
