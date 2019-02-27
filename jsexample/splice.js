/**
 * 
 */
//삽입만
var ar = [0,1,2,3,4,5,6,7];
ar.splice(2,0,10,11,12);
console.log('ar = ' + ar);

//삭제만
var ar = [0,1,2,3,4,5,6,7];
ar.splice(2,3);
ar.splice(100,10);
console.log('ar = ' + ar);

//삭제후 삽입
var ar = [0,1,2,3,4,5,6,7];
ar.splice(2,3,10,11,12);
console.log('ar = ' + ar);
