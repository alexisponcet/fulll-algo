import { expect } from 'chai';
import { defaultConfiguration } from './configuration';
import { main } from './main';

describe('with default values', () => {
	it('should display Fizz', () => {
		expect(main(3)).to.equal('Fizz');
		expect(main(9)).to.equal('Fizz');
	});

	it('should display Buzz', () => {
		expect(main(5)).to.equal('Buzz');
		expect(main(25)).to.equal('Buzz');
	});

	it('should display FizzBuzz', () => {
		expect(main(15)).to.equal('FizzBuzz');
		expect(main(225)).to.equal('FizzBuzz');
	});

	it('should display number', () => {
		expect(main(4)).to.equal('4');
		expect(main(13)).to.equal('13');
	});
});

describe('with specific fizz value', () => {
	it('should display Fizz', () => {
		expect(main(7, { ...defaultConfiguration, fizzValue: 7 })).to.equal('Fizz');
		expect(main(49, { ...defaultConfiguration, fizzValue: 7 })).to.equal('Fizz');
	});

	it('should display Buzz', () => {
		expect(main(5, { ...defaultConfiguration, fizzValue: 7 })).to.equal('Buzz');
		expect(main(25, { ...defaultConfiguration, fizzValue: 7 })).to.equal('Buzz');
	});

	it('should display FizzBuzz', () => {
		expect(main(35, { ...defaultConfiguration, fizzValue: 7 })).to.equal('FizzBuzz');
		expect(main(5, { ...defaultConfiguration, fizzValue: 5 })).to.equal('FizzBuzz');
	});

	it('should display number', () => {
		expect(main(4, { ...defaultConfiguration, fizzValue: 7 })).to.equal('4');
		expect(main(13, { ...defaultConfiguration, fizzValue: 7 })).to.equal('13');
	});
});

describe('with specific buzz value', () => {
	it('should display Fizz', () => {
		expect(main(3, { ...defaultConfiguration, buzzValue: 7 })).to.equal('Fizz');
		expect(main(9, { ...defaultConfiguration, buzzValue: 7 })).to.equal('Fizz');
	});

	it('should display Buzz', () => {
		expect(main(7, { ...defaultConfiguration, buzzValue: 7 })).to.equal('Buzz');
		expect(main(49, { ...defaultConfiguration, buzzValue: 7 })).to.equal('Buzz');
	});

	it('should display FizzBuzz', () => {
		expect(main(21, { ...defaultConfiguration, buzzValue: 7 })).to.equal('FizzBuzz');
		expect(main(3, { ...defaultConfiguration, buzzValue: 3 })).to.equal('FizzBuzz');
	});

	it('should display number', () => {
		expect(main(4, { ...defaultConfiguration, buzzValue: 7 })).to.equal('4');
		expect(main(13, { ...defaultConfiguration, buzzValue: 7 })).to.equal('13');
	});
});
