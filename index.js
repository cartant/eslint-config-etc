module.exports = {
  plugins: ["etc"],
  rules: {
    "etc/no-assign-mutated-array": ["error"],
    "etc/no-deprecated": ["warn"],
    "etc/no-foreach": ["error"],
    "etc/no-implicit-any-catch": ["error"],
    "etc/no-internal": ["error"],
    "etc/throw-error": ["error"],
    "etc/underscore-internal": ["warn"],
  },
};
