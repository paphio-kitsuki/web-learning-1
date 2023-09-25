const myHeading = document.querySelector("h1"); //要素の参照を取得
myHeading.textContent = "Hello world!"; //プロパティの書き換え
let myVariable; //変数宣言
myVariable === 1; //同値比較(値も、型も一緒か), == は等値比較(値が一緒か)
alert("aa"); //ポップアップウィンドウを表示
//関数定義
function sample() {
}
//イベントハンドラの実装
document.querySelector("html").addEventListener("click", () => { //アロー関数。無名関数の簡単な書き方
	alert("痛っ! つつかないで!");
});
  