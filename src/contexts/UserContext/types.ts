export interface iUserProviderProps {
    children: React.ReactNode;
}

export interface iUser {
    email: string;
    name: string;
    id: number;
}

export interface iUserContext {
    user: iUser | null;
    loading: boolean;
}