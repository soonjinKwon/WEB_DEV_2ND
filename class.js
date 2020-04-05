
class Person{
	constructor(name, first, second, third){
		this.name = name;
		this.first = first; 
		this.second = second;
		this.third = third;
	}
	sum(){
		return 'prototype:'+ (this.first + this.second + this.third);
	}
}   

class PersonPlus{
	constructor(name, first, second, third){
		this.name = name;
		this.first = first; 
		this.second = second;
		this.third = third;
	}
	sum(){
		return 'prototype:'+ (this.first + this.second + this.third);
	}
	avg(){
		return (this.first + this.second + this.third)/3;
	}
}   


var kim = new Person('kim', 10, 20, 50);

console.log('kim.sum()', kim.sum());
console.log('kim.avg()', kim.avg());

