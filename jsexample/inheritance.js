/**
 * 
 */

function Rectangle(w, h ){
	var width = w;
	var height = h;
	
	this.getWidth = function(){ return width;};
	this.getHeight = function(){ return height;};
	this.setWidth = function(w){	//생성자의 스코프이용 -> private 멤버(클로저 변수) 만드는방법
		width = w;};
	this.setHeight = function(h){ //변수에 접근하기 위해서 반드시 내부함수여야함.
		height = h;};

}

Rectangle.prototype.getArea = function(){
	return this.getWidth()* this.getHeight();
};

var rectangle = new Rectangle(5, 7);
console.log('AREA: ' + rectangle.getArea());


function Square(length){
	this.base = Rectangle;
	this.base (length, length);
}

Square.prototype = Rectangle.prototype;
Square.prototype.constructor =Square;

var rectangle = new Rectangle(5,7);
var square = new Square(5);
console.log(rectangle.getArea() + ' : ' + square.getArea());

console.log(square instanceof Rectangle);