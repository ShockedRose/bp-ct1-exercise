import users from "../../../auth-server/accounts.json";
import { ValidationError } from "../../utils/classes/validation-error/validation-error";

export class AuthService {
	static async validate({
		username,
		password,
	}: (typeof users.users)[number]) {
		const userFound = users.users.filter(
			(user) =>
				username.toLowerCase() === user.username.toLowerCase() &&
				password === user.password
		)[0];

		if (!userFound) throw new ValidationError();

		return userFound.username;
	}
}
