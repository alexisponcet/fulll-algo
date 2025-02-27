import * as chai from 'chai';
import chaiAsPromised from 'chai-as-promised';
import { execSync } from 'child_process';
import path from 'path';

chai.use(chaiAsPromised);
const expect = chai.expect;

const expectedResult: string =
	'1 - 2 - Fizz - 4 - Buzz - Fizz - 7 - 8 - Fizz - Buzz - 11 - Fizz - 13 - 14 - FizzBuzz';

const fizzbuzz = async (arg: string[] = []): Promise<string> => {
	try {
		return Promise.resolve(
			execSync(`tsx ${path.resolve('./src/fizzbuzz')} ${arg.join(' ')}`, { stdio: 'pipe' })
				.toString()
				.trim()
		);
	} catch (error) {
		return Promise.reject(error?.toString());
	}
};

describe('without max argument', () => {
	it('should throw an error', async () => {
		await expect(fizzbuzz()).to.be.rejectedWith(/(.*)required option(.*)not specified(.*)/);
	});
});

describe('with max argument and without fizz and buzz arguments', () => {
	it('should display expected result', async () => {
		expect(await fizzbuzz(['--max', '15'])).to.be.equal(expectedResult);
	});
});

describe('with max and fizz arguments', () => {
	it('should override expected result', async () => {
		expect(await fizzbuzz(['--max', '15', '--fizz', '4'])).not.to.be.equal(expectedResult);
	});
});

describe('with max and buzz arguments', () => {
	it('should override expected result', async () => {
		expect(await fizzbuzz(['--max', '15', '--buzz', '4'])).not.to.be.equal(expectedResult);
	});
});

describe('with max, fizz and buzz arguments', () => {
	it('should override expected result', async () => {
		expect(await fizzbuzz(['--max', '15', '--fizz', '4', '--buzz', '4'])).not.to.be.equal(
			expectedResult
		);
	});
});
