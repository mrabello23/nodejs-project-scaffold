module.exports = class MissingParam extends Error {
  constructor(paramName) {
    super(`Missing Parameter: ${paramName}`);
    this.name = "MissingParam";
  }
};
