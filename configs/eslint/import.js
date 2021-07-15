const { OFF, ERROR } = require("./const")

module.exports = {
  rules: {
    "import/prefer-default-export": OFF,
    "import/extensions": [
      ERROR,
      {
        js: "never",
        ts: "never",
      },
    ],
  },
}
