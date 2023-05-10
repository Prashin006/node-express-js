// Difference between sync and async is that we have to use callbacks with async

// let fs = require('fs');
// fs.readFile('./content/first.txt', 'utf-8', (err, result) => {
//     if (err) {
//         console.log(err);
//          return;
//     }
//     console.log(result);
// });



const { readFile, writeFile } = require('fs');
console.log('start');
// For fs-async we use callback functions. If there is error then print the error and return or print the result
readFile('./content/first.txt', 'utf-8', (err, result) => {
    if (err) {
        console.log(err);
        return;
    }
    // console.log(result);
    let first = result;
    readFile('./content/second.txt', 'utf-8', (err, result) => {
        if (err) {
            console.log(err);
            return;
        }
        let second = result;
        writeFile('./content/result-async.txt', `Here is the result: ${first}, ${second}\n`, { flag: 'a' }, (err, result) => {
            if (err) {
                console.log(err);
                return;
            }
            console.log('Done with this task');
        });
    });
});
console.log('Starting the next task');

// readFile('./content/result-sync.txt', 'utf-8', (err, result) => {
//     if (err) {
//         console.log(err);
//     }
//     console.log(result);
// });