'use strict'

const http = require('http');
const url = require('url');

let countVs = {
    '404': 0,
    '/': 0,
    '/about': 0
};

const server = http.createServer((req, res) => {
    const path = url.parse(req.url).pathname;

    if (path === '/') {
        countVs['/']++;
        res.writeHead(200, { 'Content-Type': 'text/html; charset=UTF-8' });
        res.end(
            `<h1>Home Page</h1 > 
            <p>Views: ${countVs['/']}</p>
            <a href="/about"> Go to About Page</a>
            `);
    } else if (path === '/about') {
        countVs['/about']++;
        res.writeHead(200, { 'Content-Type': 'text/html; charset=UTF-8' });
        res.end(
            `<h1>About Page</h1>
            <p>Views: ${countVs['/about']}</p>
            <a href="/"> Return to Home Page</a>
        `);
    } else {
        countVs['404']++
        res.writeHead(404, { 'Content-Type': 'text/html; charset=UTF-8' });
        res.end(`
            <h1>Page Not Found</h1>
            <p>Views: ${countVs['404']}</p>
            <a href="/"> Return to Home Page</p>
            <a href="/about"> Return to About Page</a>
        `);
    }
});

server.listen('3000');
