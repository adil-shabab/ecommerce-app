module.exports = {
  parser: '@babel/eslint-parser',
  parserOptions: {
    ecmaVersion: 2021,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  plugins: ['react', 'jsx-a11y', 'react-hooks', 'prettier'],
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:jsx-a11y/recommended',
    'plugin:react-hooks/recommended',
    'prettier',
    'prettier/react',
  ],
  settings: {
    react: {
      version: 'detect',
    },
  },
  rules: {
    'react/prop-types': 'warn', // Warn about missing propTypes
    'react/jsx-uses-react': 'off', // No longer needed for React 17+
    'react/react-in-jsx-scope': 'off', // No longer needed for React 17+
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    'prettier/prettier': 'error', // Show Prettier errors as ESLint errors
    'no-unused-vars': 'warn', // Warn about unused variables
    'react/jsx-no-undef': 'error', // Disallow undeclared variables in JSX
    'react/jsx-uses-vars': 'warn', // Warn about variables used in JSX but not declared
    'no-extra-semi': 'error', // Disallow unnecessary semicolons
    'no-unexpected-multiline': 'error', // Avoid confusing multiline expressions
    'no-mixed-spaces-and-tabs': 'error', // Disallow mixing spaces and tabs for indentation
    'no-trailing-spaces': 'error', // Disallow trailing whitespace at the end of lines
    'no-multi-spaces': 'error', // Disallow multiple spaces
  },
};