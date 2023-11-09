const yargs = require('yargs');

console.log(yargs.argv);

const command = yargs.argv[2];

if (command === 'fly') {
  console.log('flying');
} else if (command === 'drive') {
  console.log('driving');
}
