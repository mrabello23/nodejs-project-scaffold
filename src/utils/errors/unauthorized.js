module.exports = class Unauthorized extends Error {
  constructor() {
    super("");
    this.name = "Unauthorized";
  }
};
