import { AuthService } from "./auth-service";
import users from "../../../auth-server/accounts.json";
import { ValidationError } from "../../utils/classes/validation-error/validation-error";

describe("Auth Service", () => {
	it("should validate an user exists", async () => {
		const testUser = users.users[0];

		expect(await AuthService.validate(testUser)).toBe(testUser.username);
	});

	it("should error on unfound user", async () => {
		const testUser = { username: "fake", password: "user" };

		expect(
			async () => await AuthService.validate(testUser)
		).rejects.toEqual(new ValidationError());
	});
});
