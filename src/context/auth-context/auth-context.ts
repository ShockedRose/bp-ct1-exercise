import { createContext } from "react";

export interface AuthContextReturn {
	user: string | null;
	login: (user: string) => void;
	logout: () => void;
}

export const AuthContext = createContext({} as AuthContextReturn);
