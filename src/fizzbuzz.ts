import { Command } from 'commander';
import { defaultFizzBuzzConfiguration } from '@/lib/index.js';
import { START_NUMBER, parseInteger } from './parser.js';
import { runFizzbuzz } from './command/fizzbuzz.js';

/**
 * The fizzbuzz command line interface implementation.
 */
new Command()
	.version('1.0.0')
	.summary('🎅 A very classical Fizz Buzz application 🎅')
	.description(
		`The FizzBuzz game prints numbers from ${START_NUMBER} to your selected maximum number, replacing multiples of 3 with "Fizz", multiples of 5 with "Buzz", and multiples of both with "FizzBuzz". You can also select your favorite Fizz and Buzz values.`
	)
	.showHelpAfterError()
	.configureOutput({
		outputError: (str, write) => write(`\x1b[31m${str}\x1b[0m`)
	})
	.requiredOption('-m, --max <number>', 'define a Maximum number', parseInteger)
	.option(
		'-f, --fizz [number]',
		'define a Fizz number',
		parseInteger,
		defaultFizzBuzzConfiguration.fizzValue
	)
	.option(
		'-b, --buzz [number]',
		'define a Buzz number',
		parseInteger,
		defaultFizzBuzzConfiguration.buzzValue
	)
	.action(runFizzbuzz)
	.parse(process.argv);
