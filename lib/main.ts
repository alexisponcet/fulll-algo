import { defaultConfiguration, IConfiguration } from './configuration.js';

/**
 * Replace numbers divisible by buzzValue with "Buzz" and those divisible by fizzValue with "Fizz".
 * Numbers divisible by both will be replaced by "FizzBuzz".
 * @param {number} num - The number to verify.
 * @param {number} configuration.buzzValue - The value used to check for 'Buzz' (defaults to 5).
 * @param {number} configuration.fizzValue - The value used to check for 'Fizz' (defaults to 3).
 * @returns {string} - Returns 'FizzBuzz', 'Fizz', 'Buzz' or the number itself as a string.
 */
export const main = (
	num: number,
	{ buzzValue, fizzValue }: IConfiguration = defaultConfiguration
): string =>
	`${!(num % fizzValue) ? 'Fizz' : ''}${!(num % buzzValue) ? 'Buzz' : ''}` || num.toString();
