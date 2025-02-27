import type { JestConfigWithTsJest } from 'ts-jest';

const config: JestConfigWithTsJest = {
	extensionsToTreatAsEsm: ['.ts'],
	moduleFileExtensions: ['js', 'ts'],
	moduleNameMapper: {
		'^(\\.\\.?\\/.+)\\.js$': '$1',
		'@/(.*).js': '<rootDir>/$1.ts'
	},
	preset: 'ts-jest/presets/default-esm',
	testEnvironment: 'jest-environment-node',
	transform: {
		'^.+\\.test.ts$': [
			'ts-jest',
			{
				useESM: true,
				tsconfig: '<rootDir>/tsconfig.spec.json'
			}
		]
	}
};
export default config;
