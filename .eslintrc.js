module.exports = {
  env: {
    node: true,
    jest: true,
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: 'tsconfig.json',
    sourceType: 'module',
  },
  plugins: [
    '@typescript-eslint',
    'prettier',
    'import',
  ],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'plugin:import/typescript',
    'prettier'
  ],
  root: true,
  ignorePatterns: ['.eslintrc.js'],
  rules: {
    'prettier/prettier': [
      'error',
      {
        'printWidth': 120,
        'tabWidth': 2,
        'useTabs': false,
        'semi': true,
        'singleQuote': true,
        'trailingComma': 'all',
        'bracketSpacing': true,
        'arrowParens': 'always'
      }
    ],
    'complexity': ['warn', 5],
    'max-depth': ['warn', 3],
    'max-statements': ['warn', 40],
    'max-lines': ['warn', 500],
    'max-lines-per-function': ['warn', { 'max': 25, 'skipBlankLines': true }],
  }
}