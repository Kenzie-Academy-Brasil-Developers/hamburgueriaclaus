import React, { createContext, useEffect, useState } from "react";
import { iUserContext, iUserProviderProps, iUser } from "./types";



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