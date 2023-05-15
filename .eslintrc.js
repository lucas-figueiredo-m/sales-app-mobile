module.exports = {
  root: true,
  extends: [
    '@react-native-community',
    'prettier',
    'plugin:@typescript-eslint/recommended',
    'plugin:import/typescript',
  ],
  parser: '@typescript-eslint/parser',
  rules: {
    'react/jsx-filename-extension': [0],
    '@typescript-eslint/object-curly-spacing': 'off',
  },
};
