const EventEmitter = require('events');
const service = require('../services/service');

var url = 'http://google.com';

class SearchController extends EventEmitter {
    search(request) {
        parseRequestType(request);
        service.lookup(request);
        
        this.emit('search', { id: 1, url: url });
    }
}

function parseRequestType(request) {
    
}

function validateIP(request) {

}

module.exports = SearchController;