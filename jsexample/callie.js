/**
 * 
 */
console.log("5! = "+ function(n){
	if(n==1){
		return 1 ;
		
	}else{
		return n * arguments.callee(n-1);
	}
}(5));


var hex = 0x1a;
console.log("hex = " + hex);
console.log("hex = " + hex.toString(16));
console.log("hex = " + hex.toString(2));


 