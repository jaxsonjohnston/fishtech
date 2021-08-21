const whois = require('whois');

whois.lookup(request, (err, data) => {
    if (err) console.log('Error', err);
    else console.log('Success', data);
})

module.exports.lookup = lookup;