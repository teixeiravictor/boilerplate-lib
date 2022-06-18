import type { Config } from '@jest/types';

const config: Config.InitialOptions = {
  preset: 'ts-jest',
  injectGlobals: false,
  restoreMocks: true,
  testMatch: ['**/__tests__/**/*.spec.ts?(x)'],
  coveragePathIgnorePatterns: ['node_modules', '<rootDir>/__tests__/']
};

export default config;
