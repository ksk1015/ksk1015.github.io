// .demo 内のコードを表示する
document.querySelectorAll('.demo').forEach((demo) => {
  let code = demo.innerHTML

  // 文頭文末の改行を削除
  code = code.replaceAll(/^\n+/g, '').replaceAll(/\n+\s+$/gm, '')

  // インデントを削除
  const firstLineIndent = code.match(/^\s*/)[0].length
  code = code.replaceAll(new RegExp(`^\\s{${firstLineIndent}}`, 'gm'), '')

  //  <random-image></random-image> の連続を <!-- アイテム --> に置換
  code = code.replaceAll(
    /(<random-image><\/random-image>)(\s*<random-image><\/random-image>)+/g,
    (match, p1) => {
      return `<!-- item... -->`
    }
  )

  // HTMLエスケープ
  code = code.replaceAll(/</g, '&lt;').replaceAll(/>/g, '&gt;')

  const pre = document.createElement('pre')
  pre.innerHTML = `<code>${code}</code>`
  demo.prepend(pre)
})
