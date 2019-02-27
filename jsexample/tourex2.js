var list = require ('./tour.js')

list.shuffle();

//var tours = list.filter(function(e){
//	return e.regions = '경상권';
//});
var region ="경상권";
var tours = 
	list.filter(e=>e.region===region);
console.log(tours);
console.log(tours.length);

