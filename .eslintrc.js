module.exports = {
  root: true,
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },

  env: {
    browser: true,
    node: true,
    es6: true,
  },

  settings: {
    react: {
      version: 'detect',
    },
    'import/extensions': ['.js', '.jsx', '.ts', '.tsx'],
    'import/resolver': {
      node: {
        extensions: ['.js', '.ts', '.tsx', '.scss', '.css'],
      },
    },
  },

  plugins: ['@typescript-eslint', 'prettier', 'import'],

  extends: [
    'airbnb',
    'prettier',
    'plugin:@typescript-eslint/recommended',
    'plugin:jsx-a11y/recommended',
    'plugin:prettier/recommended',
    'plugin:react-hooks/recommended',
  ],

  rules: {
    '@typescript-eslint/no-unused-vars': 'error',

    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-empty-interface': 'off',

    'react/function-component-definition': 'off',

    'react/react-in-jsx-scope': 'off',
    'react/jsx-filename-extension': [
      1,
      {
        extensions: ['.ts', '.tsx', '.js', '.jsx'],
      },
    ],
    'react/jsx-props-no-spreading': 'off',
    'jsx-a11y/anchor-is-valid': [
      'error',
      {
        components: ['Link'],
        specialLink: ['hrefLeft', 'hrefRight'],
        aspects: ['invalidHref', 'preferButton'],
      },
    ],
    'no-nested-ternary': 'off',
    'import/prefer-default-export': 'off',

    'no-html-link-for-pages': 'off',
    'import/no-unresolved': [
      2,
      {
        ignore: ['^@/', '^src/'], // @ 是设置的路径别名
      },
    ],
    'security/detect-object-injection': 'off',
  },
}
