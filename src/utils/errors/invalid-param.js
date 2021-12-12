module.exports = class InvalidParam extends Error {
  constructor(paramName) {
    super(`Invalid Parameter: ${paramName}`);
    this.name = "InvalidParam";
  }
};
