import React from "react";

export interface iLinkDefaultColor {
    children: React.ReactNode;
    destination: string; 
    classList: "btnBig" | "btnMed";
    action?: () => void;
}