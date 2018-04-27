var obj = {
    name: 'John Doe',
    greet: function(){
        console.log(`Hello ${ this.name }`);
    }
}

obj.greet();
obj.greet.call({name: ' madhusudan'});
obj.greet.apply({ name: 'arahul' });

