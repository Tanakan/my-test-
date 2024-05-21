import React, { ChangeEvent } from 'react';
interface InputProps {
    value: string;
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
    placeholder?: string;
}
declare const Input: React.FC<InputProps>;
export default Input;
