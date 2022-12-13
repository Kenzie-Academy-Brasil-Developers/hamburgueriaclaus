export interface iBtnMainColorProps {
    action: (dataAction?: number | string) => void;
    children: React.ReactNode;
    classList: "btnBig" | "btnMed"; 
    dataAction?: number | string;
}