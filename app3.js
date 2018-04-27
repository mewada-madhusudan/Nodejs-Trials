var person = {
    firstname: '',
    lastname: '',
    greet: function(){
        return this.firstname+ ' '+this.lastname;
    }
}

var  john = Object.create(person);
john.firstname='madhusudan';
john.lastname='mewada';

var  jane = Object.create(person);
jane.firstname='madhu';
jane.lastname='mewada';

console.log(john.greet());
console.log(jane.greet());