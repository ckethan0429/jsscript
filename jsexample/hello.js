/**
 * 
 */
var global = "전역";

function func() {
	var local = "로컬";
	console.log('함수안 local' + local);
	console.log('함수안 global' + global);

}

func();
console.log('함수밖 global= ' + global)

for (var i = 0; i < 3; i++) {
	var k = 1234;
	console.log("i = " + i);

}

console.log("i = " + i + " ,k =" + k);

var veryBig = 1234 / 0;
console.log('veryBig = ' + veryBig);

var noNumber = Math.sqrt(-2);
console.log("noNumber = " + noNumber);

var name = '김상형 : ';
var score = 98;
console.log(name + score);
console.log(name - score);

var v1 = "8";
var v2 = "6";
var add = v1 + v2;
console.log("add : " + add);

var sub = v1 - v2;
console.log("subtract : " + sub);

var korean = "82";
var english = "72";
var total = parseInt(korean);
console.log(total);

var a = "3";
a++;
console.log("a = " + a + ", type = " + typeof (a));

var b = "3";
b += 1;
console.log("b = " + b + ", type = " + typeof (b));

var sum = 0;
var arScore = [ 88, 78, 96, 54, 23 ];
for (var st = 0; st < 5; st++) {
	console.log(st + "번쨰 학생의 성적 : " + arScore[st]);
	sum += arScore[st];
}

console.log(`총점 : ${sum}, 평균 : ${sum/arScore.length}`);

var ar = [ [ 0, 1, 2, 3 ], [ 4, 5, 6 ], [ 7, 8 ] ];
for (var i  in ar) {
	for (var j in ar ) {
		console.log("ar[" + i + "][" + j + "] =" + ar[i][j]);
	}
	console.log();
}


