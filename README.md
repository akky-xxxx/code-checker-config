# code checker config
- コードチェック系のコンフィグまとめ
- 色々横展する時のベースにすると良さそうなやつ
- eslint の値を設定しているルールは運用していく中でベスプラを探っていく系

## about
- チェック対象は `./src` 配下で格納済みのファイルはチェック処理確認用
- `./.eslintrc.js`, `./tsconfig` で `./config` 配下のルールを extends する
    - config のシェアを目的としてるため

### eslintrc 関連
- `airbnb-base`
    - とりあえず入れる。 react の場合は `airbnb` に置き換える
- `./configs/eslint/js`
    -  とりあえず入れる
- `./configs/eslint/unicorn`
    - チェックを強化したい場合にいれる
- `./configs/eslint/import`
    - `airbnb` で使われてる `eslint-plugin-import` 向けの設定
- `./configs/eslint/ts`
    - ts プロダクトはとりあえず入れる
- `prettier`
    - とりあえず入れる。 extends は最後

### cspell
- 例外辞書はジャンルごとに `./configs/cspell/*.txt` を作り、 `./cspell.json` で設定するとよさげ
    - 1ファイルにまとめると量が多くなると管理しづらい
    - 単純なソートでいいから `*.txt` の中身をソートしたい
        - 自前で `script` を用意すればいけるが・・・

## commands
| name | description |
| --- | --- |
| check-all | fix, check-code, test の順で全てのチェックを行う<br>pr rv 向け |
| check-code | spell-check, lint, type-check を行う |
| fix | 可能な限りコードチェックエラーを自動で修正する<br>コンフィグファイルを自動整形 |
| lint | eslint, ts-unused-exports のチェックを行う |
| spell-check | タイポ check を行う |
| test | jest 等によるテストを入れる用 |
| type-check | 型チェックを行う |

## issue
- react 向けも設定したい
- html, css 向けも設定したい
    - template engine 考慮すると複雑化しそう
    - css in js が絡むと css はうまくできるものなのか謎
