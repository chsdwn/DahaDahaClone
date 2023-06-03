module.exports = {
  root: true,
  extends: ['airbnb-typescript'],
  parserOptions: {
    project: './tsconfig.eslint.json',
  },
  plugins: ['import'],
  rules: {
    // turn on errors for missing imports
    'import/no-unresolved': 'error',
    'react/jsx-filename-extension': 'off',
    'import/no-extraneous-dependencies': 'off',
    'no-use-before-define': 'off',
    '@typescript-eslint/no-use-before-define': 'off',
    'import/order': [
      'error',
      {
        'newlines-between': 'always',
        groups: [
          ['builtin', 'external'],
          ['internal', 'parent', 'sibling', 'index'],
          ['object', 'type'],
        ],
      },
    ],
    '@typescript-eslint/indent': 'off',
  },
  settings: {
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx', '.d.ts'],
    },
    'import/resolver': {
      typescript: {
        alwaysTryTypes: true, // always try to resolve types under `<root>@types` directory even it doesn't contain any source code, like `@types/unist`

        // Choose from one of the "project" configs below or omit to use <root>/tsconfig.json by default

        // use <root>/path/to/folder/tsconfig.json
        project: './tsconfig.json',

        // Multiple tsconfigs (Useful for monorepos)

        // use a glob pattern
        // "project": "packages/*/tsconfig.json",

        // use an array
        // "project": [
        //   "packages/module-a/tsconfig.json",
        //   "packages/module-b/tsconfig.json"
        // ],

        // use an array of glob patterns
        // "project": [
        //   "packages/*/tsconfig.json",
        //   "other-packages/*/tsconfig.json"
        // ]
      },
    },
  },
};
