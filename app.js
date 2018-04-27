var greet = require('./greet');
greet();

var person = {
	firstname : 'Madhusudan',
	lastname : 'Mewada',
	greet: function(){
		console.log('Hello, '+this.firstname+' '+this.lastname);
}
};

person.greet();

console.log(person['firstname']);

function Person(firstname, lastname){
	this.firstname = firstname;
	this.lastname = lastname;
}

Person.prototype.greete = function(){
	console.log('hii, '+this.firstname+' '+this.lastname);
}

var  rahul = new Person('john','doe');

console.log(rahul.firstname);