var fs = require('fs');

var greet = fs.readFileSync(__dirname + '/greet.txt','utf8');
console.log(greet);

var0 greet2 =  fs.readFileSync(__dirname + '/greet.txt','utf8',function(err,data){
    console.log(data);
});
