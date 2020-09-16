const path = require('path');

const IDENTITY_OBJ_MAP_FILE_EXT = [
  'jpg',
  'jpeg',
  'png',
  'gif',
  'eot',
  'oft',
  'webp',
  'svg',
  'ttf',
  'woff',
  'woff2',
  'mp4',
  'webm',
  'wave',
  'mp3',
  'm4a',
  'aac',
  'oga',
  // Un-comment this if you want to mock css and json files while testing or add more as needed
  'css',
  'scss',
  // 'json'
];

module.exports = {
  collectCoverageFrom: ['**/*.{js,jsx}'],
  moduleDirectories: ['node_modules', '<rootDir>/src'],
  coveragePathIgnorePatterns: [
    '/__tests__/',
    '/__mocks__/',
    '/__stories__/',
    '/node_modules/',
    '<rootDir>/public/',
    '<rootDir>/dist/',
    '<rootDir>/src/stories/',
    '<rootDir>/coverage',
    '(babel|next|jest|webpack).config.js',
    '<rootDir>/\\..+/',
    '<rootDir>/storybook-build',
  ],
  coverageReporters: ['text', 'json', 'lcov', 'html'],
  moduleFileExtensions: ['js'],
  moduleNameMapper: {
    [`^.+\\.(${IDENTITY_OBJ_MAP_FILE_EXT.join('|')})$`]: 'identity-obj-proxy',
  },
  // setupFilesAfterEnv: ['./.jest/afterEnv/identity-env.js'],
  // testResultsProcessor: 'jest-sonar-reporter',
  transform: {
    '^.+\\.[t|j]sx?$': [
      'babel-jest',
      { configFile: path.join(__dirname, 'babel.config.js') },
    ],
  },
  testEnvironment: 'node',
  // reporters: ['default', 'jest-junit'],
  testMatch: ['**/__tests__/**/*.[jt]s?(x)'],
  testPathIgnorePatterns: ['<rootDir>/.next/', '<rootDir>/node_modules/'],
  verbose: true,
};
