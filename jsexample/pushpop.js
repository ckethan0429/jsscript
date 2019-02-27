/**
 * 
 */
var ar = [0,1,2,3];
console.log("ar = " + ar);

ar.push(100,200);
console.log("ar= " + ar);
ar.push(300);
console.log("ar= " + ar);

ar.pop();
console.log("ar= " + ar);

//맨앞 인덱스값 추가
ar.unshift(50);
console.log("ar= " + ar);


//맨앞 인덱스값 제거
ar.shift();
console.log("ar= " + ar);
