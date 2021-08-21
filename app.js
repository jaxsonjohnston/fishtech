const EventEmitter = require('events');
const http = require('http');

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.write('Hello World');
        res.end();
    }

    if (req.url === '/google.com') {
        res.write(JSON.stringify('This is a test'))
        res.end();
    }
});

server.on('connection', (socket) => {
    console.log('New connection -----');
});

server.listen(3000);

const SearchController = require('./initialIdeas/controllers/controller');
const searchController = new SearchController();

searchController.on('search', (arg) => {
    console.log('Search pressed', arg);
});

SearchController.search('google.com');
