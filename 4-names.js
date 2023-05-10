// local
const secret = 'SUPER SECRET';
// share
const john = 'john';
const peter = 'peter';

module.exports = { john, peter };   // as we are exporting 2 names we export it as an object
// It is important to note that secret is not exported and hence it is local to 4-names.js
console.log(module);