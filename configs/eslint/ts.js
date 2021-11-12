const { WARN, ERROR, OFF } = require("./const")

module.exports = {
  parser: "@typescript-eslint/parser",
  rules: {
    /**
     * eslint の未使用変数チェックは buggy ということで tsconfig でチェックをかける
     * refer: https://speakerdeck.com/quramy/tsconfig-options-best5?slide=6
     */
    "no-unused-vars": OFF,
    "@typescript-eslint/array-type": [
      ERROR,
      {
        default: "array",
      },
    ],
    "@typescript-eslint/consistent-indexed-object-style": [ERROR, "record"],
    "@typescript-eslint/consistent-type-definitions": [ERROR, "type"],
    "@typescript-eslint/no-confusing-void-expression": [
      ERROR,
      { ignoreVoidOperator: true },
    ],
    "@typescript-eslint/no-implicit-any-catch": [
      ERROR,
      { allowExplicitAny: false },
    ],
    "@typescript-eslint/no-unnecessary-boolean-literal-compare": [
      WARN,
      {
        allowComparingNullableBooleansToTrue: false,
        allowComparingNullableBooleansToFalse: false,
      },
    ],
    "@typescript-eslint/no-unnecessary-condition": [
      ERROR,
      {
        allowConstantLoopConditions: false,
        allowRuleToRunWithoutStrictNullChecksIKnowWhatIAmDoing: false,
      },
    ],
    "@typescript-eslint/no-unnecessary-type-arguments": WARN,
    "@typescript-eslint/prefer-string-starts-ends-with": WARN,
    "@typescript-eslint/sort-type-union-intersection-members": [
      WARN,
      { checkIntersections: true },
    ],
    "@typescript-eslint/consistent-type-assertions": [
      ERROR,
      { assertionStyle: "never" },
    ],
  },
  settings: {
    "import/resolver": {
      node: {
        extensions: [".js", ".ts"],
      },
    },
  },
}
