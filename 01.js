// FizzBuzz

// サンプル: "1" という文字列を出力
console.log("1");

// サンプル: "FizzBuzz" という文字列を出力
// (process.stdout.write で改行なしの出力ができる)
process.stdout.write("Fizz");
process.stdout.write("Buzz");
console.log(1);
console.log("ここまでサンプル");

for ( var i = 1; i <= 15; i++ ){ // 「for ループ処理」「var 宣言」「i=1 初期値iに1を代入」「i<=15 iが15になるまで繰り返す」「i++ 増減値 iを1ずつ増加」
	if( i%3 === 0 && i%5 === 0){ // 3でも5でも割り切れる場合
        console.log("FizzBuzz");
    }
    else if( i%3 === 0){ // 3で割り切れる場合
        console.log("Fizz");
    }
	else if( i%5 === 0){ // 5で割り切れる場合
        console.log("Buzz");
    }
	else{ //それ以外
        console.log(i)
    }
}
