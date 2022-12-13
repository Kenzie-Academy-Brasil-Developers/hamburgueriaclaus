import React from "react";
import { MainStyles } from "./styles";
import { iMainMarketProps } from "./types";

export function MainMarket({ children }: iMainMarketProps) {
    return (
        <MainStyles className="container">
            {children}
        </MainStyles>
    );
};