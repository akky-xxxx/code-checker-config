// チェック動作確認用のサンプル
/* eslint-disable no-magic-numbers, no-console, max-lines, no-unused-vars, @typescript-eslint/no-unused-vars */

/*
=============================
max-depth
=============================
 */
const testFunction = () => {
  const flg1 = Math.random()
  if (flg1) {
    const flg2 = Math.random()
    if (flg2) {
      const flg3 = Math.random()
      console.log(flg3)
      // 下の if 文のコメントを解除すると error
      // if (flg3) {
      //   console.log(flg3)
      // }
    }
  }
}
console.log(testFunction)

/*
=============================
@typescript-eslint/array-type
=============================
 */
// Array<number> にすると error
type Test = number[]
export const test: Test = [1]

/*
=============================
@typescript-eslint/consistent-indexed-object-style
@typescript-eslint/consistent-type-definitions
=============================
 */
type TestObject1 = Record<string, string>
const testObject1: TestObject1 = { test: "test" }
console.log(testObject1)

// interface and index signature を使うと error
// interface Obj2 {
//   [k: string]: string
// }
// const obj2: Obj2 = { test: "test" }

/*
=============================
@typescript-eslint/no-confusing-void-expression
=============================
 */
// void を return すると error
// const thisConsole = () => console.log(1)

/*
=============================
@typescript-eslint/no-unnecessary-boolean-literal-compare
=============================
 */
const someCondition = Math.floor(Math.random() * 10) % 2 === 1
// true と評価すると error
if (someCondition) {
  console.log(1)
}

/*
=============================
@typescript-eslint/no-implicit-any-catch
=============================
 */
try {
  Math.random()
  // type annotation しないと error
} catch (error: unknown) {
  console.log(error)
}

/*
=============================
@typescript-eslint/no-unnecessary-condition
=============================
 */
// function head<T>(items: T[]) {
//   if (items) {
//     return items
//   }
//   return []
// }
//
// function foo(arg: 'bar' | 'baz') {
//   if (arg) {
//     return arg
//   }
//   return ""
// }
//
// function bar<T>(arg: string) {
//   return arg?.length;
// }
//
// ;[
//   [1, 2],
//   [3, 4],
// ].filter(t => t)

/*
=============================
@typescript-eslint/no-unnecessary-type-arguments
=============================
 */
const f = <T>(argument?: T) => argument
// ジェネリスクの初期型と同じ型を渡すと error
// f<number>()
f()

/*
=============================
@typescript-eslint/prefer-string-starts-ends-with
=============================
 */
const foo = ""
const conditions = [
  // // starts with に変える
  // foo[0] === 'b',
  // foo.charAt(0) === 'b',
  // foo.indexOf('bar') === 0,
  // foo.slice(0, 3) === 'bar',
  // foo.substring(0, 3) === 'bar',
  // /^bar/.test(foo),
  // // ends with に変える
  // foo[foo.length - 1] === 'b',
  // foo.charAt(foo.length - 1) === 'b',
  // foo.lastIndexOf('bar') === foo.length - 3,
  // foo.slice(-3) === 'bar',
  // foo.substring(foo.length - 3) === 'bar',
  // /bar$/.test(foo),

  // correct
  foo.startsWith("bar"),
  foo.endsWith("bar"),
]
console.log(conditions)

/*
=============================
sort-type-union-intersection-members
=============================
 */
type A = string
type B = number
// アルファベットオーダー
// type T1 = A | B;
// type T2 = { b: string } & { a: string };
// type T3 = [1, 2, 4] & [1, 2, 3];
// type T4 =
//   | [1, 2, 4]
//   | [1, 2, 3]
//   | { b: string }
//   | { a: string }
//   | (() => void)
//   | (() => string)
//   | 'b'
//   | 'a'
//   | 'b'
//   | 'a'
//   | readonly string[]
//   | readonly number[]
//   | string[]
//   | number[]
//   | B
//   | A
//   | string
const testA: A = ""
export const testB: B = 1
console.log({ testA, testB })

/*
=============================
unicorn/numeric-separators-style
=============================
 */
// 桁区切りアンスコを消すと上記ルールで error
const testNumber = 123_456
console.log({ testNum: testNumber })
