const path = require("path");

const root = path.resolve(__dirname, "..");

const resolve = (relativePath) => path.resolve(root, relativePath);

const files = ["package.json", "README.md"];

module.exports = files.map(resolve);
