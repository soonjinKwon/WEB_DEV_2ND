var superObj = {superVal : 'super'}
// var subObj = {subVal : 'sub'}
// subObj.__proto__ = superObj;
var subObj = Object.create(superObj);
subObj.subVal = 'sub';
debugger;
console.log('subObj.subVal =>', subObj.subVal);
console.log('superObj.superVal =>', subObj.superVal);
subObj.superVal = 'sub';
console.log('subObj.superVal =>', subObj.superVal);
