var kim = {name: 'kim', first:20, second:30}
var lee = {name: 'lee', first:10, second:20}
function sum(prefix){
	return prefix + (this.first + this.second);
}

console.log('sum.call(kim)', sum.call(kim));


var kimSum = sum.bind(kim, '->');
console.log('kimSum()', kimSum());



