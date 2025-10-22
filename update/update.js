
const { exec } = require('child_process');

console.log('Starte Update...');

exec('node sources/park4night.js', (err, stdout, stderr) => {
  if (err) console.error(stderr);
  else console.log(stdout);
});

exec('node sources/adac.js', (err, stdout, stderr) => {
  if (err) console.error(stderr);
  else console.log(stdout);
});
