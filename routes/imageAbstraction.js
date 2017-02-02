const express = require('express');
const assert = require('assert');
const nedb = require('nedb');

const operations = require('../data/operations');
const searchResults = require('./imageSearchResults');

var searchDb= new nedb({filename: './data/searchres', autoload: true});

var imageAbsRouter = express.Router();

imageAbsRouter.route('/:search')
.get(function (request, response) {

        var date = new Date();
        var timestamp = date.getTime();
        if (request.params.search === 'latest') {
            operations.findSearchRes(searchDb, function (err, results) {
                assert.equal(null, err); 
                
                if (results === null || results.length === 0) {
                    response.send('No Search Results available!'); 
                } else {
                    
                    var filteredRes = [];
                    for (let ele of results) {
                        filteredRes.push({
                            search: ele['search'],
                            when: ele['when']
                        });
                    }
                    response.json(filteredRes); 
                }
            });
        } else {
        operations.findSearchRes(searchDb, 
            function (err, results) {
                assert.equal(null, err);

                if (results !== null && results.length >= 10) {
                    operations.deleteSearchRes(searchDb, 
                        results[0],
                        function (err, res) {
                            assert(null, err);
                        }); 
                }

                var doc = {
                    'search': request.params.search,
                    'when' : date,
                    'timestamp': timestamp
                }; 

                operations.insertSearchRes(searchDb, doc, 
                    function (err, results) {
                        assert.equal(null, err);
                        searchResults.getSearchResults(request.query.offset || 10, 
                            request.params.search,
                            function (err, results) {
                                assert.equal(null, err); 

                                var filteredRes = [];
                                for (let ele of results) {
                                    filteredRes.push({
                                        link: ele['link'], 
                                        snippet: ele['snippet']
                                    });
                                }
                                response.json(filteredRes);
                            });
                    });
            });
        }
});

module.exports = imageAbsRouter;
