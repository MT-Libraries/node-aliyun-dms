
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
    utils.getStringToSign = function (args) {

        var _stringToSign;
        var _queryString;

        // 符号编码
        function percentEncode(str) {
            return str.replace('/', '%2F');
        }

        // 排序后的字符串
        _queryString = utils.sortArray(args.queryArray).join('&');

        //console.log(_queryString);

        _stringToSign =
            args.httpMethod + "&" +
            percentEncode("/") + "&" +
            percentEncode(utils.topEscape(_queryString));

        return _stringToSign;
    };

    /**
     * 生成查询对象
     *
     * @param queryObj
     * @returns {{httpMethod: string, queryArray: (Array|*)}}
     */
    _protected.getQueryObject = function (queryObj) {

        var paramsObj,
            queryArray,
            _httpMethod = "GET",
            _date = new Date();

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

        queryArray = utils.objToArray(paramsObj);

        return {
            'httpMethod': _httpMethod,
            'queryArray': queryArray
        };

    };

    /**
     * 生成签名字符串
     *
     * @param args
     * @returns {string}
     */
    _protected.getSignatureString = function (args) {

        var _stringToSign = utils.getStringToSign(args);

        //console.log(_stringToSign);

        return utils.hMacSha1(_stringToSign, defaults.accesskey + '&');
    };

    /**
     * 生成查询字符串
     *
     * @param params
     * @returns {string}
     */
    obj.getQueryString = function (params) {

        var queryObject = _protected.getQueryObject(params);
        var signature = _protected.getSignatureString(queryObject);

        //console.log(signature);

        return "http://" + defaults.host + "/?" + 'Signature=' + signature + '&' + queryObject.queryArray.join('&');
    };

    return obj;
};

module.exports = aliyun;