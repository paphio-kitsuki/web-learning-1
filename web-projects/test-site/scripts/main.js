const myImage = document.querySelector("img"); //定数宣言

myImage.onclick = () => { //クリックされたら
	const mySrc = myImage.getAttribute("src");
	if (mySrc === "images/myimage.png")
		myImage.setAttribute("src", "images/myimage2.png");
	else
		myImage.setAttribute("src", "images/myimage.png");
};

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUserName() {
	let myName = null;
	while (!myName) //空文字列やnullの時
		myName = prompt("あなたの名前を入力してください。"); //alertの入力求める版
	localStorage.setItem("name", myName); //ブラウザにデータを格納
	myHeading.textContent = `新米錬金術師の${myName} さん、「お支払いは、錬金で！」を始めよう！`;
}

//関数に囲まれず、じかに書かれたコードは初期化される際に(プログラムの最初に)実行される。
myButton.onclick = () => {
	setUserName();
};

if (!localStorage.getItem("name"))
	setUserName();
else {
	const storedName = localStorage.getItem("name");
	myHeading.textContent = `ベテラン錬金術師の${storedName}さん、久しぶり！`;
}
