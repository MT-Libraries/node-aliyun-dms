var urllib = require('urllib');
var parser = require('xml2json');


var api = function (bundleInterface) {

    var _interface = bundleInterface || {};

    var obj = {};

    obj.request = function (params, callback) {

        var _callback,
            _queryString;

        // callback                
        if (callback && typeof callback === 'function') {
            _callback = callback;
        } else {
            _callback = function(err,data){
                console.log(err,data);
            };
        }
        
        // queryString
        _queryString = _interface.getQueryString(params);
        
        console.log(_queryString);
                
        urllib.request(_queryString, {
            method: 'GET',
            headers: {
                'ETAG': 'MT-NODE'
            }
        }, function (err, data, res) {
            
            if (err) {                                              
                throw err;
                _callback(err,null);  
                return; 
            }            
            
            var xml = data.toString();
            var json = parser.toJson(xml); //returns a string containing the JSON structure by default 

            _callback(null,JSON.parse(json));            

        });
    };

    return obj;
};


module.exports = api;