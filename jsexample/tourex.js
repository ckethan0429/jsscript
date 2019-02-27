var list = require ('./tour.js')

console.log(list.length)
var set = {};
list.forEach(e=>set[e.region] =1)

var regions = Object.keys(set);
console.log(regions);

//////////////////
for (var i in regions){
	console.log(i + regions[i]);
}

