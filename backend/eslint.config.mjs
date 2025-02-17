// eslint.config.mjs
import eslint from '@eslint/js';
import tseslint from '@typescript-eslint/eslint-plugin';
import tsParser from '@typescript-eslint/parser';
import prettier from 'eslint-config-prettier';

export default [
  eslint.configs.recommended, // Base recommended ESLint rules
  {
    files: ['**/*.ts'],
    languageOptions: {
      parser: tsParser, // Use TypeScript parser
      sourceType: 'module',
    },
    plugins: {
      '@typescript-eslint': tseslint, // Enable TypeScript ESLint rules
    },
    rules: {
      'prettier/prettier': 'error',
      '@typescript-eslint/no-unused-vars': 'warn',
      '@typescript-eslint/no-explicit-any': 'warn',
      'no-console': 'warn',
    },
  },
  prettier, // Disable conflicting Prettier rules
];
