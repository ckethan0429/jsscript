/**
 * 
 */
var ar = [0,1,2,3];
console.log("ar[1] = " +ar[1]);

ar['korea'] = 4;
console.log('ar["korea"] = ' + ar["korea"],ar.length); // index는 숫자만해당
console.log('ar.korea =' +ar.korea); //for in 으로 루프돌릴시엔 다돌아감.(key가 정수가 아닌 다른 타입도 가능)

ar[-3.14] = 5;
console.log('ar[3.14] = ' +ar['-3.14'],ar.length);

for (var i in ar){
	console.log(ar[i]);
} 