/** @type {import('ts-jest').JestConfigWithTsJest} */
// eslint-disable-next-line no-undef
module.exports = {
  preset: 'ts-jest',
  setupFilesAfterEnv: ["@testing-library/jest-dom/extend-expect"],
  testEnvironment: 'jsdom'
};