// カウンタの初期値を0に設定
let count = 0;

// カウンタを取得し、表示する関数
function updateCounter() {
    const counterElement = document.getElementById("counter");
    counterElement.textContent = count;
}

// ページ読み込み時にカウンタを更新
window.onload = function () {
    // ストレージに保存されたカウンタ値を取得
    const storedCount = localStorage.getItem("accessCount");
    if (storedCount !== null) {
        count = parseInt(storedCount);
    }

    // カウンタを更新して表示
    updateCounter();

    // カウンタを1増やす
    count++;

    // カウンタの値をストレージに保存
    localStorage.setItem("accessCount", count.toString());

    // カウンタを更新して表示
    updateCounter();
};
