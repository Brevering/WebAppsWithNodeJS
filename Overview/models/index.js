
const fs = require('fs');

fs.readdirSync(__dirname) 
    .filter(file => file.indexOf('-model') >= 0)
    .forEach(file => {
        require(__dirname + '/' + file); 
    }); 
