import React, { createContext, useCallback, useContext, useState } from "react";
import { v4 } from "uuid";
import { ToastContainer } from "../components/ToastContainer";

export type ToastMessageProps = {
    id: string;
    type: "success" | "error";
    title: string;
    description?: string;
};

interface IToastContextProps {
    addToast(message: Omit<ToastMessageProps, "id">): void;
    removeToast(id: string): void;
}

interface IToastProviderProps {
    children: React.ReactNode;
}

const ToastContext = createContext({} as IToastContextProps);

function ToastProvider({ children }: IToastProviderProps) {
    const [messages, setMessages] = useState<ToastMessageProps[]>([]);

    const addToast = useCallback(
        ({ title, type, description }: Omit<ToastMessageProps, "id">) => {
            const toast = {
                id: v4(),
                type,
                title,
                description,
            };

            setMessages((state) => [...state, toast]);
        },
        []
    );

    const removeToast = useCallback((id: string) => {
        setMessages((state) => state.filter((item) => item.id !== id));
    }, []);

    return (
        <ToastContext.Provider value={{ addToast, removeToast }}>
            {children}
            <ToastContainer messages={messages} />
        </ToastContext.Provider>
    );
}

function useToast(): IToastContextProps {
    const context = useContext(ToastContext);

    if (!context) {
        throw new Error("Context not provided");
    }

    return context;
}

export { ToastProvider, useToast };
