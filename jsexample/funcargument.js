/**
 * 
 */

var add = function(a,b){
	return a + b ; 
}

var multi = function(a,b){
	return a * b ; 
}

function calc (a,b,f){
	return f(a,b);
}

console.log("2+3= "+ calc(2,3,add) );
console.log("2*3= "+ calc(2,3,multi) );

var result = calc(3,2, function(a,b){
	return a/b;
	
});

result = calc (3,2 ,(a,b)=>a/b);  // javascript 람다식->화살표함수

console.log("3/2 = " +result);


function forEach(arr, fn){
	if (!fn) return;
	
	for (var i = 0; i < arr.length; i++) {
		 fn(arr[i], i , arr);	
	}
}


var data = [1,2,3,4,5,6];
var newData = [];
// forEach(data, (e,i, arr)=> arr[i] =e*e);
// forEach(data, console.log);

forEach(data, (e,i,arr)=> newData[i]= e*e);
forEach(newData, console.log);
// forEach(data, function(v,i,e){
// console.log(`${i} :${v},${e}`);
// });
//
// forEach(data, console.log);
//

//---------------------------------------------------------
function outer(){
	return function(){
		console.log('hello function!');
	};
}

outer()();

var fn = outer();
fn();
//------------------------------------------------------------------------------------
function test(name) {
	var output = 'Hello ' + name + '...!';
return function() {
	console.log(output) 
	} 
}
test('Javascript')();