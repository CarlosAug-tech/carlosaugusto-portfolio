import React, { useEffect, useRef } from "react";
import { useField } from "@unform/core";
import { IconBaseProps } from "react-icons";

import { FaExclamationCircle } from "react-icons/fa";
import {
    Container,
    ErrorMessage,
    LabelElement,
    TextAreaElement,
} from "./styles";

interface ITextAreaProps {
    labelText: string;
    name: string;
    icon?: React.Component<IconBaseProps>;
}

function TextArea({ name, labelText, icon: Icon }: ITextAreaProps) {
    const textareaRef = useRef<HTMLTextAreaElement>(null);
    const { fieldName, registerField, defaultValue, error } = useField(name);

    useEffect(() => {
        registerField({
            name,
            ref: textareaRef,
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
            <TextAreaElement
                ref={textareaRef}
                name={name}
                placeholder=" "
                isError={!!error}
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

export { TextArea };
