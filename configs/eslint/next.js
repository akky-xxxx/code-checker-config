const { OFF, ERROR } = require("./const")

module.exports = {
  rules: {
    "react/jsx-props-no-spreading": OFF,
    "react/prop-types": OFF,
    "react/jsx-fragments": [ERROR, "element"],
    "react/jsx-filename-extension": [
      ERROR,
      { extensions: [".ts", ".tsx"] },
    ],
  },
  overrides: [
    {
      files: ["**/*.stories.tsx"],
      rules: {
        "import/no-extraneous-dependencies": OFF,
      },
    },
    {
      files: ["**/*.tsx"],
      rules: {
        "no-use-before-define": OFF,
      },
    },
  ],
}
