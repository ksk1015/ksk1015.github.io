/**
 * URLハッシュがあって一致する要素があった場合にレイアウトシフトによるずれを調整する
 */
function adjustAnchorLinkScrollPosition(time = 2000) {
  const hash = window.location.hash;
  const target = hash ? document.querySelector(hash) : null;
  if (!target) return;

  // スクロール位置を調整する処理
  const adjustScroll = () => {
    target.scrollIntoView();
  };

  // 調整の繰り返し処理スタート
  let loopTimer = 0
  const loop = () => {
    loopTimer = requestAnimationFrame(() => {
      adjustScroll();
      loop();
    });
  }
  loop();

  // 調整の繰り返し処理を停止する処理
  const killLoop = () => {
    cancelAnimationFrame(loopTimer);
  };

  // ユーザー操作があれば調整を停止（他にも見るべきイベントあるかも）
  window.addEventListener('mousedown', killLoop, {once: true});
  window.addEventListener('touchstart', killLoop, {once: true});
  window.addEventListener('touchmove', killLoop, {once: true});
  window.addEventListener('keydown', killLoop, {once: true});
  window.addEventListener('wheel', killLoop, {once: true});
  window.addEventListener('focusin', killLoop, {once: true});

  // 引数の時間（ms）経過したら調整を停止
  setTimeout(killLoop, time);
}

// 調整時間は2000msにしてるが根拠はない
adjustAnchorLinkScrollPosition(2000);
