/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
export default {
  preset: 'ts-jest',
  testEnvironment: 'jest-environment-node',
  testMatch: ['<rootDir>/src/tests/**/*.spec.ts'],
  transform: {},
};
