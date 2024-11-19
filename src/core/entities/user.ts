export class User {
	id: string;
	email: string;
	password: string;
	createdAt: Date;
	updatedAt: Date;

	constructor(
		id: string,
		email: string,
		password: string,
		createdAt: Date = new Date(),
		updatedAt: Date = new Date()
	) {
		this.id = id;
		this.email = email;
		this.password = password;
		this.createdAt = createdAt;
		this.updatedAt = updatedAt;
	}

	/**
	 * Updates the password and sets the updatedAt timestamp.
	 * @param newPassword - The new hashed password to set.
	 */
	updatePassword(newPassword: string): void {
		this.password = newPassword;
		this.updatedAt = new Date();
	}

	/**
	 * Checks if the user's email matches a given string.
	 * @param emailToCheck - The email to compare with the user's email.
	 * @returns True if emails match, false otherwise.
	 */
	isEmailMatch(emailToCheck: string): boolean {
		return this.email === emailToCheck;
	}
}
