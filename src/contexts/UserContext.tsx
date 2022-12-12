import React, { createContext, useState } from "react";

interface iUserProviderProps {
    children: React.ReactNode;
}

interface iUser {
    email: string;
    name: string;
    id: number;
}

interface iUserContext {
    user: iUser | null;
    loading: boolean;
}

export const UserContext = createContext({} as iUserContext);

export function UserProvider({ children }: iUserProviderProps) {
    const [user, setUser] = useState<iUser | null>(null);
    const [loading, setLoading] = useState(false);

    return (
        <UserContext.Provider value={{
            user,
            loading
        }}>
            {children}
        </UserContext.Provider>
    )
}