const yargs = require('yargs');

console.log(yargs.argv);

const command = yargs.argv._[0];

if (command === 'fly') {
  console.log('flying');
} else if (command === 'drive') {
  if (command.speed && command.car) {
    console.log(`driving ${command.car} at the speed of`);
  } else {
    console.log('driving');
  }
}
