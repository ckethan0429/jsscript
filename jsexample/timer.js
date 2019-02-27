/**
 * 
 */
//
//var intervalID = setInterval(function(){
//	console.log(new Date());
//},1000);
//
//setTimeout(function(){
//	clearInterval(intervalID);
//}, 10000);


function launch(){
	console.log('발사! ....');
}

function fire(){
	console.log('BOOM! ....');
}

function countdown(counter, fn){
	
	console.log(counter);
	var timerId= setInterval(function(){
		counter--;
		console.log(counter);
		if(counter ==0){
			clearInterval(timerId);
			fn();
		}
	},1000);
}

countdown(10, launch);
countdown(4,fire);