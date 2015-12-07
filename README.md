# node-aliyun-dms

nodejs版本阿里云DMS服务.

实现了 aliyun dms签名服务以及基础使用方法，具体的使用参数请参考aliyun dms api.

* submit    提交参数调用需要的功能
* callback 可返回json格式的数据

## Usage

- Install 

	```
	$ npm install node-aliyun-dms
	```

- Initialize

	```
	var DirectMailService = require('node-aliyun-dms');
	var dms = new DirectMailService({
	    'accessid': 'testId',
	    'accesskey': 'testKeySecret'
	});
	
	```

- Submit Operation

	```
	var callback = function(err,data){
	
	    if(err){
	        console.log(err);
	        return;
	    }
	    console.log('Callback: \n',data);
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
	dms.sendSingleMail(...);
	
	/**
	 * sendBatchMail - 批量发送邮件
	 * @param  {String}   accountName   管理控制台中配置的发信地址
	 * @param  {Number}   addressType   取值范围0~1: 0为随机账号(推荐,可以更好的统计退信情况);1为发信地址
	 * @param  {String}   templateName  预先创建且通过审核的模板名称
	 * @param  {String}   receiversName 预先创建且上传了收件人的收件人列表名称
	 * @param  {String}   tagName       邮件标签名称
	 * @param  {Function} callback      回调函数
	 */
	 dms.sendBatchMail(...);
	 
	```

## Reference

- Api

	[http://help.aliyun.com/document_detail/directmail/api-reference/overview.html?spm=5176.777602103.6.76.OLvdmM](http://help.aliyun.com/document_detail/directmail/api-reference/overview.html?spm=5176.777602103.6.76.OLvdmM)
	
- NPM 

	[https://www.npmjs.com/package/node-aliyun-dms](https://www.npmjs.com/package/node-aliyun-dms)	

## License

The MIT License (MIT)

Copyright (c) 2015 Magic Term Libraries

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.



