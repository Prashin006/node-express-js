const { readFileSync, writeFileSync } = require('fs');

console.log('start');
let first = readFileSync('./content/first.txt', 'utf8');
let second = readFileSync('./content/second.txt', 'ascii');

// console.log(first, second);

// nodejs will create a new file result-sync.txt if it doesn't exist or overwrite the content in it if the file result-sync.txt exists
// writeFileSync('./content/result-sync.txt', `Here is the result: ${first}, ${second}`)

// to append to an existing file add another argument => "{flag:a}" to the writeFileSync function

// writeFileSync('./content/result-sync.txt', '\nWe have appended to the file ', { flag: 'a' });

writeFileSync('./content/result-sync.txt', '\nThis is some more content appended', { flag: 'a' });
console.log('Done with this task');
console.log('starting the next one');