// object properties and methods

var obj = {
	greet: 'HEllo'
}

console.log(obj.greet);
console.log(obj['greet']);
var prop = 'greet';
console.log(obj[prop]);


// function and array
var arr=[];
arr.push(function(){
	console.log('Hello World 1');
});
arr.push(function(){
	console.log('Hello World 2');
});
arr.push(function(){
	console.log('Hello World 3');
});

arr.forEach(function(item){
	item();
});