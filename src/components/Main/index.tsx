import React from "react";
import { MainStyles } from "./styles";

interface iMainProps {
    children: React.ReactNode;
}

export function Main({ children }: iMainProps) {
    return (
        <MainStyles className="container">
            {children}
        </MainStyles>
    );
};