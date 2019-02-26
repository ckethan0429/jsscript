/**
 * 
 */
var ar = [1,2,5,9,15];

for(var i = 0; i<ar.length ; i++){
	console.log("ar[" + i+ "] =" + ar[i]);
}

ar.length =3;

for(var i = 0; i<ar.length ; i++){
	console.log("ar[" + i+ "] =" + ar[i]);
}

ar.length = 10;
for(var i = 0; i<ar.length ; i++){
	console.log("ar[" + i+ "] =" + ar[i]);
}

ar.length = 20;
//for(var i = 0; i<ar.length ; i++){
for(var i in ar){
	console.log("ar[" + i+ "] =" + ar[i]);
}


var arr= [1234, "문자열",true, {name:"김상형", age:29}];
for(var  i =0 ; i <arr.length; i++){
	console.log("arr[" + i+ "] =" + arr[i]);
}