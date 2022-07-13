import React from "react";
import { useTransition } from "react-spring";
import { ToastMessageProps } from "../../hooks/toast";
import { Container } from "./styles";
import { ToastItem } from "./ToastItem";

interface IToastContainerProps {
    messages: ToastMessageProps[];
}

function ToastContainer({ messages }: IToastContainerProps) {
    const messagesWithTransations = useTransition(messages, {
        from: { right: "-120%", opacity: 0 },
        enter: { right: "0%", opacity: 1 },
        leave: { right: "-120%", opacity: 0 },
    });

    return (
        <Container>
            {messagesWithTransations((props, item) => (
                <ToastItem key={item.id} message={item} style={props} />
            ))}
        </Container>
    );
}

export { ToastContainer };
