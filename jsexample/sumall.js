/**
 * 
 */
function sumAll(){
	var sum = 0;

	for (var i = 0; i <arguments.length ; i++) {
		sum += arguments[i];
	}
	return sum;
}


console.log(sumAll(1,2,3,4,5,6,7,8,9));

function total(){
	var s = 0;
	if (typeof(arguments[0])== "string"){
		s = "";
	}

	for (var i = 0; i < arguments.length; i++) {
		s += arguments[i];
	}
	return s;
}

console. log(total(1,2,3));
console. log(total('니들이','게맛을','알아?'));