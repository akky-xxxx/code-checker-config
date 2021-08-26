const { OFF, WARN, ERROR } = require("./const")

module.exports = {
  extends: ["eslint:recommended"],
  rules: {
    complexity: [ERROR, 10],
    "max-depth": [ERROR, 2],
    "max-lines": [ERROR, { max: 200 }],
    "max-nested-callbacks": [ERROR, 3],
    "max-statements": [ERROR, 50],
    "multiline-comment-style": OFF,
    "no-magic-numbers": WARN,
    "no-undefined": ERROR,
    "sort-keys": WARN,
  },
}
