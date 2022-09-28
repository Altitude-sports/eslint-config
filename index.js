module.exports = {
  env: {
    es2021: true,
    node: true,
    browser: true,
  },
  root: true,
  extends: [
    'eslint:recommended',
    'plugin:jsonc/recommended-with-jsonc',
    'google',
  ],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
    /* ecmaFeatures: {
      impliedStrict: true,
    }, */
  },
  overrides: [
    {
      files: [
        '**/*.test.js',
        '**/__tests__/*.js',
        'utils/**',
      ],
      env: {
        jest: true,
      },
    },
  ],
  plugins: [
    '@typescript-eslint',
    'jsonc',
  ],
  globals: {
    context: true,
    __ENV: true,
    open: true,
    BSON: true,
    EJSON: true,
  },
  rules: {
    'prefer-destructuring': ['error', {
      array: true,
      object: true,
    }, {
      enforceForRenamedProperties: false,
    }],
    'max-len': ['error', {
      code: 120,
    }],
  },
};
