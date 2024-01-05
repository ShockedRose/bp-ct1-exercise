import "./app.scss";
import "@pichincha/ds-core/dist/ds-core/ds-core.css";
import LogoBP from "./assets/logo-BP.svg";
import { AuthContext } from "./context/auth-context/auth-context";
import { useAuthContext } from "./context/auth-context/use-auth-context/use-auth-context";
import {
	createBrowserRouter,
	RouterProvider,
	Navigate,
} from "react-router-dom";
import { useContext, ReactNode } from "react";

const ProtectedRoute = ({ Component }: { Component: ReactNode }) => {
	const { user } = useContext(AuthContext);

	if (!user) return <Navigate to={"/login"} />;

	return Component;
};
const router = createBrowserRouter([
	{
		path: "/",
		element: <Navigate to={"/parser"} />,
	},
	{
		path: "/login",
		element: <>login</>,
	},
	{
		path: "/parser",
		element: <ProtectedRoute Component={<>excel parser</>} />,
	},
	{
		path: "*",
		element: <Navigate to={"/parser"} />,
	},
]);

function App() {
	const login = useAuthContext();

	return (
		<AuthContext.Provider value={{ ...login }}>
			<RouterProvider router={router} />
		</AuthContext.Provider>
	);
}

export default App;
