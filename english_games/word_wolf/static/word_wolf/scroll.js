// スクロールイベントのリスナーを無効化する関数
function disableScroll() {
  // スクロールイベントのデフォルト動作をキャンセル
  window.addEventListener("scroll", preventDefaultScroll, { passive: false });
}

// // デフォルトのスクロールイベントをキャンセルする関数
// function preventDefaultScroll(event
