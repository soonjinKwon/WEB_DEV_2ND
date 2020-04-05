var superObj = {superVal : 'super'}
var subObj = {subVal : 'sub'}

subObj.__proto__ = superObj;
console.log('subObj.subVal =>', subObj.subVal);
console.log('superObj.superVal =>', subObj.superVal);

subObj.superVal = 'Sub';
console.log('subObj.superVal =>', subObj.superVal);
