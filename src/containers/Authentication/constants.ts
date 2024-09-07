const MIN_PASSWORD_LENGTH = 8;

export enum AUTH_TYPES {
  LOGIN = "login",
  REGISTER = "register",
}

export const AUTH_INITIAL_VALUES: Record<string, string> = {
  email: "",
  name: "",
  password: "",
};

/**
 * Validation functions for authentication form fields.
 *
 * This object contains validation functions for different authentication form fields.
 * Each function takes a string value and returns either an error message (if the value is invalid)
 * or `null` (if the value is valid).
 *
 * @constant
 * @type {Record<string, (val: string) => string | null>}
 */
export const AUTH_VALIDATOR: Record<string, (val: string) => string | null> = {
  /**
   * Validates email addresses.
   *
   * Checks if the provided value matches the pattern for a valid email address.
   *
   * @param {string} value - The email address to validate.
   * @returns {string | null} - Returns an error message if the email is invalid, otherwise `null`.
   */
  email: (value: string): string | null =>
    !/^\S+@\S+\.\S+$/.test(value) ? "Invalid email address" : null,

  /**
   * Validates passwords.
   *
   * Checks if the provided password is at least 6 characters long.
   *
   * @param {string} value - The password to validate.
   * @returns {string | null} - Returns an error message if the password is too short, otherwise `null`.
   */
  password: (value: string): string | null =>
    value.length < MIN_PASSWORD_LENGTH
      ? `Password should include at least ${MIN_PASSWORD_LENGTH} characters`
      : null,
};
