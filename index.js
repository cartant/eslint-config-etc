module.exports = {
  plugins: ["etc"],
  rules: {
    "etc/deprecation": ["warn"],
    "etc/no-array-foreach": ["error"],
    "etc/no-assign-mutated-array": ["error"],
    "etc/no-implicit-any-catch": ["error"],
    "etc/throw-error": ["error"],
  },
};
