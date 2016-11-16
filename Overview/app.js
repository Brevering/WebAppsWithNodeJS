/*globals require */

const fs = require('fs');

var contents = fs.readFileSync('app.js', 'utf8');

//console.log(contents);

/* variant 1 
const SuperheroModule = require('./models/superhero.js');
const Superhero = SuperheroModule.Superhero;

var batman = new Superhero('Batman', 'Bruce Wayne', 'Utility Belt');

console.log(batman); */

const ModelsFactory = require('./models');