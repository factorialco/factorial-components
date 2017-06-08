module.exports = {
  root: true,

  parser: 'babel-eslint',

  plugins: [
    'flowtype',
    'react'
  ],

  env: {
    browser: true,
    commonjs: true,
    es6: true,
    jest: true,
    node: true
  },

  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
      generators: true,
      experimentalObjectRestSpread: true
    }
  },

  extends: [
    'plugin:react/recommended',
    'plugin:flowtype/recommended',
    'standard',
    'standard-jsx',
    'standard-react'
  ],

  // TODO: Review those. Ideally, we don't want custom options
  //       We must stand strong against OCD.
  rules: {
    'no-unused-vars': 2,
    'indent': ['error', 2, { 'SwitchCase': 1 }],
    'object-curly-spacing': ['warn', 'always'],
    'no-duplicate-imports': 'off',

    // TODO: Enable when it works https://github.com/yannickcr/eslint-plugin-react/issues?utf8=%E2%9C%93&q=is%3Aissue%20is%3Aopen%20no-unused-prop-types
    'react/no-unused-prop-types': 'off',

    'flowtype/no-weak-types': [0, {
      'any': false,
      'Object': false,
      'Function': false
    }]
  }
};
