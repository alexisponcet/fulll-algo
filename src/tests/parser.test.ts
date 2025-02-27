import { expect } from 'chai';
import { InvalidArgumentError } from 'commander';
import { parseInteger } from '@/src/parser.js';

describe('with good value', () => {
	it('should parse number', () => {
		expect(parseInteger('10')).to.equal(10);
	});
});

describe('with not a number value', () => {
	it('should throw an error', () => {
		expect(() => parseInteger('toto')).to.throw(InvalidArgumentError, 'must be a number');
	});
});

describe('with smaller value than initial one', () => {
	it('should throw an error', () => {
		expect(() => parseInteger(-1)).to.throw(
			InvalidArgumentError,
			'must be greater or equal than'
		);
	});
});

describe('with fallback value', () => {
	it('should not throw error', () => {
		expect(() => parseInteger('toto', 4)).not.to.throw(InvalidArgumentError);
		expect(() => parseInteger(-1, 4)).not.to.throw(InvalidArgumentError);
	});

	it('should parse number', () => {
		expect(parseInteger('toto', 4)).to.equal(4);
		expect(parseInteger(-1, 4)).to.equal(4);
	});
});
