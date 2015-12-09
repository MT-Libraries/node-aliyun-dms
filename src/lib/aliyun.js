
var extend = require('util')._extend;
var utils = require('./utils');

/**
 *
 * 阿里云相关工具包
 *
 * @Ahthor      :   Thonatos.Yang
 * @Statement   :   部分代码拆分自aliyun-sdk
 */

var aliyun = function (options) {

    var obj = {};
    var defaults = options || {};
    var _protected = {};
      
    /**
    * 根据规范构造用于计算签名的字符串
    *
    * @param args
    * @returns {string|*}
    */
    _protected.getSortString = function(queryArray){
        return utils.sortArray(queryArray).join('&');
    }
    
    /**
     * 生成查询对象
     *
     * @param queryObj
     * @returns {queryArray: (Array|*)}
     */
    _protected.getArgsArray = function (queryObj,sign) {

        var paramsObj,
            queryArray,
            _date = new Date(),
            _type = sign === "sign" ? true : false;
            
        paramsObj = {
            'SignatureVersion': '1.0',
            'SignatureMethod': 'HMAC-SHA1',
            'Fommat': defaults.format,
            'Version': defaults.version,
            'AccessKeyId': defaults.accessid,
            'Timestamp': utils.formatDate(_date),
            'SignatureNonce': Math.round(Math.random() * 1000000)
        };

        extend(paramsObj, queryObj);
        
        queryArray = utils.objToArray(paramsObj,_type);
               
        return queryArray;
    };
    
    /**
     * 生成签名
     *
     * @param args
     * @returns {string}
     */
    _protected.getSignature = function (obj) {

        var _stringToSign;
        var _queryString;
        
        _queryString = _protected.getSortString(obj);
        
        _stringToSign =
            "GET" + "&" +
            utils.percentEncode("/") + "&" +
            utils.percentEncode(utils.topEscape(_queryString));
        
        return utils.hMacSha1(_stringToSign, defaults.accesskey + '&');
    };

    /**
     * 生成查询字符串
     *
     * @param params
     * @returns {string}
     */
    obj.getQueryString = function (params) {

        var signArray = _protected.getArgsArray(params,"sign");
        var signature = _protected.getSignature(signArray);
       
        return "http://" + defaults.host + "/?" + 'Signature=' + signature + '&' + _protected.getSortString(signArray);
    };

    return obj;
};

module.exports = aliyun;