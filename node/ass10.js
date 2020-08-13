var fs = require ('fs');
var file = process.argv[2] + ".txt";
var text = process.argv[3];

fs.writeFile(file, text, function(err) {
  if (err) throw err;
  console.log('The file has been saved!');
});

fs.readFile(file, 'utf8', function(err, contents) {  
    if (err) throw err;
    console.log(contents);
});