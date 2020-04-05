var kim = {name: 'kim', first:20, second:30}
var lee = {name: 'lee', first:10, second:20}
function sum(){
	return this.first + this.second;
}

console.log('sum.call(kim)', sum.call(kim));


