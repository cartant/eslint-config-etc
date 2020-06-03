module.exports = {
  plugins: ["etc"],
  rules: {
    "etc/deprecation": ["warn"],
    "etc/no-assign-mutated-array": ["error"],
    "etc/no-unused-declaration": ["error"],
    "etc/throw-error": ["error"],
  },
};
