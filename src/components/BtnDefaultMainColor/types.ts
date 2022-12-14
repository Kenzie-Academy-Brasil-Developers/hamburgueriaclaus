
export interface iBtnMainColorProps {
    action: (dataAction?: number | string) => void;
    children: React.ReactNode;
    classList: "btnBig" | "btnMed"; 
    type?: "button" | "submit" | "reset";
    dataAction?: number | string;
}