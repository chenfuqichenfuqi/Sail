/**
 * For a detailed explanation regarding each configuration property, visit:
 * https://jestjs.io/docs/configuration
 */

import type { Config } from "jest";

const config: Config = {
  // Automatically clear mock calls, instances, contexts and results before every test
  clearMocks: true,

  // Indicates whether the coverage information should be collected while executing the test
  collectCoverage: true,

  // An array of glob patterns indicating a set of files for which coverage information should be collected
  // collectCoverageFrom: undefined,

  // The directory where Jest should output its coverage files
  coverageDirectory: "coverage",
  coveragePathIgnorePatterns: [
    "/node_modules/", // 忽略node_modules目录
    "__tests__",
  ],
  // Indicates which provider should be used to instrument code for coverage
  coverageProvider: "v8",

  preset: "ts-jest",

  // testEnvironment: "jest-environment-node",
};

export default config;
