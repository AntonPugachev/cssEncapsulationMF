// For a detailed explanation regarding each configuration property, visit:
// https://jestjs.io/docs/en/configuration.html

// eslint-disable-next-line import/no-commonjs
module.exports = {
  "roots": [
    "<rootDir>/src"
  ],
  "transform": {
    "^.+\\.(ts|tsx|js)?$": "ts-jest"
  },


  // Automatically clear mock calls and instances between every test
  clearMocks: true,

  testTimeout: 60000, // one minute timeout for all tests

  // An array of glob patterns indicating a set of files for which coverage information should be collected
  collectCoverageFrom: [
    'src/**/*.[jt]s',
    'src/**/*.[jt]sx',
    'src/**/*.ts',
    'src/**/*.tsx',
    '!src/**/*generated*.*',
    '!jest.config.js',
    '!eslint.config.js',
    '!src/setupTests.js',
    '!src/testing/*.*',
    '!src/assets/**/*.*',
    '!src/dev/**/*.*',
    '!src/**/*stories.*',
  ],

  // The directory where Jest should output its coverage files
  coverageDirectory: 'coverage',

  // A list of reporter names that Jest uses when writing coverage reports.
  coverageReporters: ['text', 'html', 'json-summary'],

  coveragePathIgnorePatterns: [ '.*stories.*','src/msw'],

  // An array of file extensions your modules use
  moduleFileExtensions: ['js', 'json', 'jsx', 'ts', 'tsx'],

  moduleNameMapper: {
    "\\.(css|scss|svg)$": "identity-obj-proxy"
  },

  // The paths to modules that run some code to configure or set up the testing environment before each test
  setupFilesAfterEnv: ['<rootDir>/src/msw/setupJest.js'],

  // Use this configuration option to add custom reporters to Jest.
  reporters: ['default'],

  // The test environment that will be used for testing
  testEnvironment: 'jsdom',

  // The glob patterns Jest uses to detect test files
  testMatch: ['**/?(*.)spec.[jt]s', '**/?(*.)spec.[jt]sx'],

  // An array of regexp pattern strings that are matched against all test paths, matched tests are skipped
  testPathIgnorePatterns: ['public/', 'src/msw'],

  verbose: false,
};
