var regions = ['강원권',  '경상권', '서울/경기권', '전라권'];
function shuffle(arr){
	var  j , x , i;
		
   for (i =arr.length; i>0; i--) {
	   j = parseInt(Math.random()*i);
	   x = arr[i-1];
	   arr[i-1] = arr[j];
	   arr[j] = x;
	   
   }
	
}
shuffle(regions);
console.log(regions);