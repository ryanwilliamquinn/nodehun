var nodehun = require('./../build/Release/nodehun');
var fs = require('fs'),
  config = require('./config');

var affbuf,
  dictbuf,
  dict = {};

config.states.forEach(function(state) {
    dictionaryName = state.toLowerCase() + '_Places';
    affbuf = fs.readFileSync(__dirname + '/dictionaries/' + dictionaryName + '/' + dictionaryName + '.aff');
    dictbuf = fs.readFileSync(__dirname + '/dictionaries/' + dictionaryName + '/' + dictionaryName + '.dic');
    dict[state] = new nodehun(affbuf,dictbuf);
});

dict['CA'].spellSuggest('san farncso',function(a,b){console.log('misspelling "San Francisco"',a,b)});
