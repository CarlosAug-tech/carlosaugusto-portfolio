import { useField } from "@unform/core";
import React, {
    HTMLInputTypeAttribute,
    InputHTMLAttributes,
    useEffect,
    useRef,
} from "react";
import { IconBaseProps } from "react-icons";
import { FaExclamationCircle } from "react-icons/fa";
import { Container, ErrorMessage, InputElement, LabelElement } from "./styles";

interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
    type: HTMLInputTypeAttribute;
    name: string;
    labelText: string;
    icon?: React.Component<IconBaseProps>;
}

function Input({ type, name, labelText, icon: Icon, ...rest }: IInputProps) {
    const inputRef = useRef<HTMLInputElement>(null);
    const { fieldName, registerField, defaultValue, error } = useField(name);

    useEffect(() => {
        registerField({
            name,
            ref: inputRef,
            getValue: (ref) => ref.current.value,
            setValue: (ref, value) => {
                ref.current.value = value;
            },
            clearValue: (ref) => {
                ref.current.value = "";
            },
        });
    }, [fieldName, registerField]);

    return (
        <Container>
            <InputElement
                ref={inputRef}
                type={type}
                name={name}
                placeholder=" "
                isError={!!error}
                {...rest}
            />
            <LabelElement htmlFor="">{labelText}</LabelElement>
            {error && (
                <>
                    <FaExclamationCircle size={16} />
                    <ErrorMessage>
                        <span>{error}</span>
                    </ErrorMessage>
                </>
            )}
        </Container>
    );
}

export { Input };
