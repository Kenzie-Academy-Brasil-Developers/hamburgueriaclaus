export interface iBtnLittleProps {
    action: (dataAction ?: number | string) => void;
    dataAction?: number | string;
    children: React.ReactNode;
    classList: string;
}