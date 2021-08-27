const { OFF, WARN, ERROR } = require("./const")

module.exports = {
  extends: ["eslint:recommended"],
  rules: {
    complexity: [ERROR, 5],
    "max-depth": [ERROR, 3],
    "max-lines": [ERROR, { max: 50 }],
    "max-nested-callbacks": [ERROR, 3],
    "max-statements": [ERROR, 10],
    "multiline-comment-style": OFF,
    "no-magic-numbers": WARN,
    "no-undefined": ERROR,
    "sort-keys": WARN,
  },
}
