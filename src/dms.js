/**
 *
 * dms.js.
 *
 * @project     node-aliyun-dms
 * @datetime    23:05 - 15/10/22
 * @author      Thonatos.Yang <thonatos.yang@gmail.com>
 * @copyright   Thonatos.Yang <https://www.thonatos.com>
 *
 */

var extend = require('util')._extend;
var urlencode = require('urlencode');
var aliyun = require('./lib/aliyun');
var api = require('./lib/api');

/**
 * @module mts
 * @param options
 * @returns {{}}
 */
module.exports = function (options) {

    var that = this;
    var obj =  {};
    var defaults = {
        'host': 'dm.aliyuncs.com',
        'accessid': 'testId',
        'accesskey': 'testKeySecret',
        'version': '2015-11-23',
        'format': 'json'
    };

    extend(defaults, options);
    
    this.aliyun = aliyun(defaults);
    this.request = api(this.aliyun).request;
    this._submit = function (params, callback) {
        that.request(params, callback);
    };

    /**
     * sendSingleMail - 单个发送邮件
     * @param  {String}   accountName    管理控制台中配置的发信地址
     * @param  {Boolean}  replyToAddress 是否使用管理控制台中配置的回信地址（状态必须是验证通过）
     * @param  {Number}   addressType    取值范围0~1: 0为随机账号(推荐,可以更好的统计退信情况);1为发信地址
     * @param  {String}   toAddress      目标地址，多个Email地址可以逗号分隔
     * @param  {String}   subject        邮件主题
     * @param  {String}   htmlBody       邮件html正文
     * @param  {String}   textBody       邮件text正文
     * @param  {Function} callback       回调函数
     */
     function sendSingleMail(accountName,replyToAddress,addressType,toAddress,subject,htmlBody,textBody,callback){

        that._submit({
            Action: 'SingleSendMail',
            AccountName: accountName,
            ReplyToAddress: replyToAddress,
            AddressType: addressType,
            ToAddress: toAddress,
            Subject:  urlencode(subject),
            HtmlBody: urlencode(htmlBody),
            TextBody: urlencode(textBody)
        }, callback);
    }

    /**
     * sendBatchMail - 批量发送邮件
     * @param  {String}   accountName   管理控制台中配置的发信地址
     * @param  {Number}   addressType   取值范围0~1: 0为随机账号(推荐,可以更好的统计退信情况);1为发信地址
     * @param  {String}   templateName  预先创建且通过审核的模板名称
     * @param  {String}   receiversName 预先创建且上传了收件人的收件人列表名称
     * @param  {String}   tagName       邮件标签名称
     * @param  {Function} callback      回调函数
     */
     function sendBatchMail(accountName,addressType,templateName,receiversName,tagName,callback){

        that._submit({
            Action: 'BatchSendMail',
            AccountName: accountName,
            AddressType: addressType,
            TemplateName:templateName,
            ReceiversName:receiversName,
            TagName:tagName
        }, callback);
    }

    obj.sendSingleMail =sendSingleMail;
    obj.sendBatchMail = sendBatchMail;

    return obj;
};