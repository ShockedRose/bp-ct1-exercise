import { render, screen } from "@testing-library/react";
import App from "./app";

describe("App component", () => {
	it("Should render elements", () => {
		render(<App />);

		const logo = screen.getByAltText("logo banco pichincha");

		expect(logo).toBeInTheDocument();
	});
});
