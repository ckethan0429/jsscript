/**
 * 
 */
function Human(name, age){
	this.name = name ;
	this.age = age;
	
	this.intro =function(){
		console.log('name = ' + this.name);
		console.log('name = ' + this.age);
	};
}

Human.prototype.intro = function(){
	console.log('name = ' + this.name);
	console.log('name = ' + this.age);
}

var kim = new Human ('김상형', 29);
var lee = new Human ('이승우', 40);

kim.intro();
lee.intro();