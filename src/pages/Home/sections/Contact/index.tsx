import React, { useCallback, useRef } from "react";
import emailjs from "emailjs-com";
import { Form } from "@unform/web";
import { FormHandles } from "@unform/core";
import { useTranslation } from "react-i18next";

import { Button } from "../../../../components/Button";
import { Input } from "../../../../components/Input";
import { Section } from "../../../../components/Section";
import { TextArea } from "../../../../components/TextArea";
import { useToast } from "../../../../hooks/toast";

import { ContactContainer } from "./styles";

interface IFormDataContact {
    name: string;
    email: string;
    subject: string;
    message: string;
}

function SectionContact() {
    const { t } = useTranslation();

    const contactTitle = t("contact.title");
    const nameLabel = t("name.label");
    const emailLabel = t("email.label");
    const subjectLabel = t("subject.label");
    const messageLabel = t("message.label");
    const sendMessageButton = t("send.message.button");
    const errorMessageFieldRequired = t("error.message.field.required");
    const successMessageSendMessage = t("success.message.send.message");
    const errorMessageSendMessage = t("error.message.send.message");

    const { addToast } = useToast();
    const formRef = useRef<FormHandles>(null);

    const emailjsServiceID = process.env.REACT_APP_EMAILJS_SERVICE_ID as string;
    const emailjsTemplateID = process.env
        .REACT_APP_EMAILJS_TEMPLATE_ID as string;
    const emailjsUserID = process.env.REACT_APP_EMAILJS_USER_ID as string;

    const requiredFieldValidation = useCallback(
        (fields: string[], data: any) => {
            let arrError = {};

            for (const field of fields) {
                if (!data[field]) {
                    arrError = {
                        ...arrError,
                        [field]: errorMessageFieldRequired,
                    };
                }
            }

            return arrError;
        },
        []
    );

    const handleSubmit = useCallback(
        async ({ name, email, subject, message }: IFormDataContact) => {
            const requiredFields = ["name", "email", "subject", "message"];

            try {
                formRef.current?.setErrors({});
                const errors = requiredFieldValidation(requiredFields, {
                    name,
                    email,
                    subject,
                    message,
                });

                if (Object.keys(errors).length > 0) {
                    formRef.current?.setErrors(errors);
                    return;
                }

                await emailjs.send(
                    emailjsServiceID,
                    emailjsTemplateID,
                    { name, email, subject, message },
                    emailjsUserID
                );

                addToast({
                    type: "success",
                    title: successMessageSendMessage,
                });

                formRef.current?.reset();
            } catch (err) {
                addToast({
                    type: "error",
                    title: errorMessageSendMessage,
                });
            }
        },
        []
    );

    return (
        <Section
            id="Contact"
            outContent={
                <svg viewBox="0 0 500 150" preserveAspectRatio="none">
                    <path d="M0.00,49.98 C149.99,150.00 349.20,-49.98 500.00,49.98 L500.00,150.00 L0.00,150.00 Z" />
                </svg>
            }
        >
            <h3>{contactTitle}</h3>
            <h3>{process.env.REACT_APP_EMAILJS_SERVICE_ID}</h3>
            <ContactContainer>
                <Form ref={formRef} onSubmit={handleSubmit}>
                    <Input
                        type="text"
                        name="name"
                        labelText={`${nameLabel}:`}
                    />
                    <Input
                        type="email"
                        name="email"
                        labelText={`${emailLabel}:`}
                    />
                    <Input
                        type="text"
                        name="subject"
                        labelText={`${subjectLabel}:`}
                    />
                    <TextArea name="message" labelText={`${messageLabel}:`} />
                    <Button type="submit" buttonText={sendMessageButton} />
                </Form>
            </ContactContainer>
        </Section>
    );
}

export { SectionContact };
