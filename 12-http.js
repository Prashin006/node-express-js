const http = require('http');

// req is request and res is response
// const server = http.createServer((req, res) => {
//     console.log(req);
//     res.write('Welcome to our home page!!!');
//     res.end();
// });

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.end('Welcome to our home page!!!');
    }
    if (req.url === '/about') {
        res.end('Welcome to our about page!!!');
    }
    res.end(`<h1>Oops</h1>
    <p>The page you are looking for no longer exists!</p>
    <a href="/">Back Home</a>`);
})
server.listen(5000);