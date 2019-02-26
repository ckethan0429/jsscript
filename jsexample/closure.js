/**
 * 
 */
function outcount(name,n){
	var count = 0;
	
	setInterval(function(){
		count++;
		console.log(count + "초 지났습니다.");
	}, n);
}

outcount("test1",1000);
outcount("test2",300);