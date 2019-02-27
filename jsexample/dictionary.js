/**
 * 
 */
var cap = new Object(); // var cap = {};
cap["한국"] = "서울";
cap["미국"] = "워싱턴";
cap["일본"] = "독교";
cap["영국"] = "런던";
cap["프랑스"] = "파리";
console.log("영국의 수도는 " + cap["영국"] + "입니다.");

var keys= Object.keys(cap)
console.log(keys)