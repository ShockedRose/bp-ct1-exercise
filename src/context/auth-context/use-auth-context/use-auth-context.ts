import { useState } from "react";
import type { AuthContextReturn } from "../auth-context";

export const useAuthContext = (): AuthContextReturn => {
	const [user, setUser] = useState<string | null>(
		sessionStorage.getItem("loggedUser")
	);

	return {
		login: (user: string) => setUser(user),
		logout: () => setUser(null),
		user: user,
	};
};
