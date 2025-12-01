/**
 * document.documentElement.clientWidth を CSS変数 --client-width にセットする
 * headで module でなく読み込むと、レイアウトシフトを抑えられる
 */
;(() => {
  let rafId = 0
  const setClientWidthToCss = () => {
    if (rafId) {
      cancelAnimationFrame(rafId)
    }
    rafId = requestAnimationFrame(() => {
      rafId = 0
      const clientWidth = document.documentElement.clientWidth
      document.documentElement.style.setProperty(
        '--client-width',
        `${clientWidth}px`
      )
    })
  }

  window.addEventListener('resize', setClientWidthToCss)
  setClientWidthToCss()
})()
