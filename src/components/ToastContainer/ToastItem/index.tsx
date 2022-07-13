import React, { useEffect } from "react";
import { FaCheckCircle, FaExclamationCircle, FaTimes } from "react-icons/fa";

import { ToastMessageProps, useToast } from "../../../hooks/toast";

import { ClosePopUp, ToastPopUp } from "./styles";

interface IToastItemProps {
    message: ToastMessageProps;
    style: any;
}

function ToastItem({ message, style }: IToastItemProps) {
    const { removeToast } = useToast();

    useEffect(() => {
        const timer = setTimeout(() => {
            removeToast(message.id);
        }, 3000);

        return () => clearTimeout(timer);
    }, [message.id, removeToast]);

    return (
        <ToastPopUp type={message.type} style={style}>
            {message.type === "success" ? (
                <FaCheckCircle />
            ) : (
                <FaExclamationCircle />
            )}
            <span>{message.title}</span>
            {message.description && <p>{message.description}</p>}

            <ClosePopUp type="button" onClick={() => removeToast(message.id)}>
                <FaTimes />
            </ClosePopUp>
        </ToastPopUp>
    );
}

export { ToastItem };
