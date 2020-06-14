module.exports = {
  plugins: ["etc"],
  rules: {
    "etc/deprecation": ["warn"],
    "etc/no-assign-mutated-array": ["error"],
    "etc/no-unused-declaration": ["warn"],
    "etc/throw-error": ["error"],
  },
};
