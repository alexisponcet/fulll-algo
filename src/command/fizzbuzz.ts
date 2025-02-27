import { fizzbuzz } from '@/lib/index.js';
import { START_NUMBER } from '@/src/parser.js';

/**
 * The function iterates over numbers from START_NUMBER to max and applies the FizzBuzz Logic.
 * The results are printed to the console in a joined string format.
 * @param {number} params.max - The maximum number up to which FizzBuzz should be run.
 * @param {number} params.buzz - The divisor for the "Buzz" condition.
 * @param {number} params.fizz - The divisor for the "Fizz" condition.
 * @returns {void}
 */
export const runFizzbuzz = ({
	max,
	buzz,
	fizz
}: {
	max: number;
	buzz: number;
	fizz: number;
}): void => {
	console.log(
		[...Array(max - START_NUMBER + 1).keys()]
			.map((n) =>
				fizzbuzz(n + START_NUMBER, {
					buzzValue: buzz,
					fizzValue: fizz
				})
			)
			.join(' - ')
	);
};
