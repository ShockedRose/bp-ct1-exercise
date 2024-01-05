import "./app.scss";
import "@pichincha/ds-core/dist/ds-core/ds-core.css";
import LogoBP from "./assets/logo-BP.svg";
import { AuthContext } from "./context/auth-context/auth-context";
import { useAuthContext } from "./context/auth-context/use-auth-context/use-auth-context";

function App() {
	const login = useAuthContext();

	return (
		<AuthContext.Provider value={{ ...login }}>
			<main>
				<img src={LogoBP} alt="logo banco pichincha" />

				<div></div>
			</main>
		</AuthContext.Provider>
	);
}

export default App;
