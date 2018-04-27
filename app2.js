var Emitter = require('./emitter');

var emtr = new Emitter;

emtr.on('greet',function(){
	console.log('some aksndasnlxnas');
});

emtr.on('greet',function(){
	console.log('some ');
});

console.log('Hello');
emtr.emit('greet');
