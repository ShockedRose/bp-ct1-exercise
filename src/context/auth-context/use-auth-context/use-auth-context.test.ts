import { renderHook } from "@testing-library/react";
import { useAuthContext } from "./use-auth-context";
import { act } from "react-dom/test-utils";

describe("useAuthContext Hook", () => {
	it("should have no user at start", () => {
		const { result } = renderHook(() => useAuthContext());

		expect(result.current.user).toBe(null);
	});

	it("should login an user", () => {
		const testUser = "john";
		const { result } = renderHook(() => useAuthContext());

		act(() => {
			result.current.login(testUser);
		});
		expect(result.current.user).toBe(testUser);
	});

	it("should logout an user", () => {
		const { result } = renderHook(() => useAuthContext());

		act(() => {
			result.current.logout();
		});
		expect(result.current.user).toBe(null);
	});
});
