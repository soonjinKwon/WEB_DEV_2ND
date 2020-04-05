
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

class PersonPlus extends Person{
	avg(){
		return (this.first + this.second + this.third)/3;
	}
}   


var kim = new PersonPlus('kim', 10, 20, 50);

console.log('kim.sum()', kim.sum());
console.log('kim.avg()', kim.avg());

 