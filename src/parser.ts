import { InvalidArgumentError } from 'commander';

/**
 * The algorithm start number that may change later.
 */
export const START_NUMBER: number = 1;

/**
 * Parses the provided value into an integer and ensures it meets certain conditions.
 * If the parsed value is not a valid integer or is below the minimum threshold (START_NUMBER),
 * an optional fallback value is returned, or an error is thrown.
 * @param {any} value - The value to be parsed into an integer. Can be any type, but should be a string or number.
 * @param {number} [fallbackValue] - The optional fallback value to return if parsing fails or the number is too small.
 * @returns {number} - Returns the parsed integer, or the fallback value if parsing fails and fallback is provided.
 * @throws {InvalidArgumentError} - Throws an error if the parsed value is not a valid number or is less than START_NUMBER.
 */
export const parseInteger = (value: any, fallbackValue?: number): number => {
	// eslint-disable-line @typescript-eslint/no-explicit-any
	const parsedValue = parseInt(value, 10);
	if (isNaN(parsedValue) || parsedValue < START_NUMBER) {
		if (fallbackValue !== 0 && fallbackValue) return fallbackValue;
		throw new InvalidArgumentError(
			`The argument must be a number and must be greater or equal than ${START_NUMBER}.`
		);
	}
	return parsedValue;
};
