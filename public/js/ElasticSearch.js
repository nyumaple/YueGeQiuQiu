
// Create Client
var elasticsearch = require('elasticsearch');
var connectionString = "https://site:307c619e894e90a40d1a3e2abedcfd9a@dori-us-east-1.searchly.com";
var client = new elasticsearch.Client({
    host: connectionString
});

// Index Creation
function createIndex (index) {
    client.indices.create({
        index: index,
    }, function (error, response) {
        console.log(response);
    });
}

// Index a document
function addIndex (index, type, id, body) {
    client.index({
        index: index,
        type: type,
        id: id,
        body: body
        /*body: {
            name: 'Reliability',
            text: 'Reliability is improved if multiple redundant sites are used, which makes well-designed '
        }*/
    }, function (error, response) {
        console.log(response);
    });
}

// Search
function search (index, type, body) {
    client.search({
        index: index,
        type: type,
        body: body
    }).then(function (resp) {
        console.log(resp);
    }, function (err) {
        console.log(err.message);
    });
}

exports.elasticsearch = {
    'createIndex': createIndex,
    'addIndex': addIndex,
    'search': search
}





