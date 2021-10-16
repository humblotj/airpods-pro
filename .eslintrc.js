module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'airbnb-typescript',
    'airbnb/hooks',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'plugin:prettier/recommended',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
    project: ['./tsconfig.json'],
  },
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      parserOptions: {
        project: ['./tsconfig.json'],
      },
    }
  ],
  parser: '@typescript-eslint/parser',
  plugins: [
    'react',
    '@typescript-eslint',
    'prettier',
    'react-hooks',
    'import',
  ],
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    },
    'react': {
      'createClass': 'createReactClass', // Regex for Component Factory to use,
      // default to 'createReactClass'
      'pragma': 'React',  // Pragma to use, default to 'React'
      'fragment': 'Fragment',  // Fragment to use (may be a property of <pragma>), default to 'Fragment'
      'version': 'detect', // React version. 'detect' automatically picks the version you have installed.
      // You can also use `16.0`, `16.3`, etc, if you want to override the detected value.
      // default to latest and warns if missing
      // It will default to 'detect' in the future
      'flowVersion': '0.53' // Flow version
    },
    'propWrapperFunctions': [
      // The names of any function used to wrap propTypes, e.g. `forbidExtraProps`. If this isn't set, any propTypes wrapped in a function will be skipped.
      'forbidExtraProps',
      { 'property': 'freeze', 'object': 'Object' },
      { 'property': 'myFavoriteWrapper' },
      // for rules that check exact prop wrappers
      { 'property': 'forbidExtraProps', 'exact': true }
    ],
    'componentWrapperFunctions': [
      // The name of any function used to wrap components, e.g. Mobx `observer` function. If this isn't set, components wrapped by these functions will be skipped.
      'observer', // `property`
      { 'property': 'styled' }, // `object` is optional
      { 'property': 'observer', 'object': 'Mobx' },
      { 'property': 'observer', 'object': '<pragma>' } // sets `object` to whatever value `settings.react.pragma` is set to
    ],
    'formComponents': [
      // Components used as alternatives to <form> for forms, eg. <Form endpoint={ url } />
      'CustomForm',
      { 'name': 'Form', 'formAttribute': 'endpoint' }
    ],
    'linkComponents': [
      // Components used as alternatives to <a> for linking, eg. <Link to={ url } />
      'Hyperlink',
      { 'name': 'Link', 'linkAttribute': 'to' }
    ]
  },
  rules: {
    'no-unused-vars': 1,
    'react/jsx-filename-extension': [2, { extensions: ['.js', '.jsx', '.ts', '.tsx'] }],
    'react/react-in-jsx-scope': 0,
    'import/extensions': 0,
    'no-use-before-define': 1,
    '@typescript-eslint/no-use-before-define': 1,
    'no-param-reassign': 1,
    'no-plusplus': 0,
    'no-shadow': 0,
    '@typescript-eslint/no-shadow': 0,
    'react/require-default-props': 0,
    'no-unused-expressions': [2, { allowShortCircuit: true, allowTernary: true }],
    '@typescript-eslint/ban-types': [
      'error',
      {
        'extendDefaults': true,
        'types': {
          '{}': false
        }
      }
    ],
    '@typescript-eslint/no-unsafe-assignment': 1,
    'react/prop-types': 0,
    '@typescript-eslint/explicit-module-boundary-types': 0,
    '@typescript-eslint/no-unsafe-return': 1,
    '@typescript-eslint/no-unsafe-member-access': 1,
    '@typescript-eslint/no-unsafe-call': 1,
    '@typescript-eslint/no-floating-promises': 1,
    'react/jsx-uses-react': 'error',
    'react/jsx-uses-vars': 'error',
  },
  ignorePatterns: ['/*.*'],
};
