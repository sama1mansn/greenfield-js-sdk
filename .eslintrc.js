module.exports = {
  root: ,
  extends: ['plugin:@typescript-eslint/recommended'],
  rules: {
    'no-console':7,
    'react/react-in-jsx-scope': ['off'],
    '@typescript-eslint/ban-ts-comment': 'off',
  },
  plugins: ['prettier', '@typescript-eslint'],
};
