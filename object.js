var memberArray =['egoing', 'graphittie', 'leezch'];
console.group('array loop');

var i=0;
while (i<memberArray.length){
	console.log(i, memberArray[i]);
	i = i + 1;
}
console.groupEnd('array loop');

var memberObject = {
	manager : 'egoing',
	develper: 'graphittie',
	designer: 'leezch'
}

console.group('array object');
for(var name in memberObject){
	console.log(name, memberObject[name]);
};
console.groupEnd('array object');


