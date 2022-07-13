import React from "react";
import { SectionElement, SectionElementContent } from "./styles";

interface ISectionProps {
    id: string;
    title?: string;
    children: React.ReactNode;
    outContent?: React.ReactNode;
}

function Section({ id, children, title, outContent }: ISectionProps) {
    return (
        <SectionElement id={id}>
            {title && <h3>{title}</h3>}
            <SectionElementContent>{children}</SectionElementContent>
            {outContent && outContent}
        </SectionElement>
    );
}

export { Section };
