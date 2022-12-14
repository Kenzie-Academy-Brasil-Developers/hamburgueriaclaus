export interface iBtnGreyColorProps {
    action: () => void;
    children: React.ReactNode;
    classList: 'btnBig' | 'btnMed'; 
    type?: 'button' | 'submit' | 'reset';
    disabled?: boolean;
}