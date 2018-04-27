var fs = require('fs');
var zlib = require('zlib');

var readable = fs.createReadStream(__dirname + '/greet.txt','utf8');

var writable = fs.createWriteStream(__dirname + '/greetcopy.txt','utf8');

var compressed = fs.createReadStream(__dirname + '/greet.txt.gz');
var gzip = zlib.createGzip();


readable.pipe(writable);

readable.pipe(gzip).pipe(compressed);
