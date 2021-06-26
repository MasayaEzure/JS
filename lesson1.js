'use script';

// 変数： 値を格納してる箱。 その箱を「変数名」と呼ぶ
let name1 = "Taro";
console.log(name1);

// 定数
const number = 0712;
console.log(number);

// テンプレートリテラル
console.log(`誕生日は ${number} です`);

// 配列
// 配列内の値 : 要素
const numbers = [1, 2, 3, 6, 10];

console.log(numbers);
console.log(numbers.length);

// オブジェクト
// プロパティ: 値
const item = {
    name: "次郎",
    age: 20,
    hobby: "サッカー"
}

console.log(item.name);
console.log(item.age);
console.log(item.hobby);