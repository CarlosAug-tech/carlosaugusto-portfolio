import React, { ButtonHTMLAttributes } from "react";
import { ButtonElement } from "./styles";

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    type: "button" | "submit";
    buttonText: string;
}

function Button({ type, buttonText, ...rest }: IButtonProps) {
    return (
        <ButtonElement type={type} {...rest}>
            {buttonText}
        </ButtonElement>
    );
}

export { Button };
