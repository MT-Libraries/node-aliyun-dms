## Modules
<dl>
<dt><a href="#module_mts">mts</a> ⇒ <code>Object</code></dt>
<dd></dd>
</dl>
## Members
<dl>
<dt><a href="#extend">extend</a></dt>
<dd><p>dms.js.</p>
</dd>
</dl>
<a name="module_mts"></a>
## mts ⇒ <code>Object</code>

| Param |
| --- |
| options | 


* [mts](#module_mts) ⇒ <code>Object</code>
  * [~sendSingleMail(accountName, replyToAddress, addressType, toAddress, subject, htmlBody, textBody, callback)](#module_mts..sendSingleMail)
  * [~sendBatchMail(accountName, addressType, templateName, receiversName, tagName, callback)](#module_mts..sendBatchMail)

<a name="module_mts..sendSingleMail"></a>
### mts~sendSingleMail(accountName, replyToAddress, addressType, toAddress, subject, htmlBody, textBody, callback)
sendSingleMail - 单个发送邮件

**Kind**: inner method of <code>[mts](#module_mts)</code>  

| Param | Type | Description |
| --- | --- | --- |
| accountName | <code>String</code> | 管理控制台中配置的发信地址 |
| replyToAddress | <code>Boolean</code> | 是否使用管理控制台中配置的回信地址（状态必须是验证通过） |
| addressType | <code>Number</code> | 取值范围0~1: 0为随机账号(推荐,可以更好的统计退信情况);1为发信地址 |
| toAddress | <code>String</code> | 目标地址，多个Email地址可以逗号分隔 |
| subject | <code>String</code> | 邮件主题 |
| htmlBody | <code>String</code> | 邮件html正文 |
| textBody | <code>String</code> | 邮件text正文 |
| callback | <code>function</code> | 回调函数 |

<a name="module_mts..sendBatchMail"></a>
### mts~sendBatchMail(accountName, addressType, templateName, receiversName, tagName, callback)
sendBatchMail - 批量发送邮件

**Kind**: inner method of <code>[mts](#module_mts)</code>  

| Param | Type | Description |
| --- | --- | --- |
| accountName | <code>String</code> | 管理控制台中配置的发信地址 |
| addressType | <code>Number</code> | 取值范围0~1: 0为随机账号(推荐,可以更好的统计退信情况);1为发信地址 |
| templateName | <code>String</code> | 预先创建且通过审核的模板名称 |
| receiversName | <code>String</code> | 预先创建且上传了收件人的收件人列表名称 |
| tagName | <code>String</code> | 邮件标签名称 |
| callback | <code>function</code> | 回调函数 |

<a name="extend"></a>
## extend
dms.js.

**Kind**: global variable  
**Project**: node-aliyun-dms  
**Datetime**: 23:05 - 15/10/22  
**Author:** Thonatos.Yang <thonatos.yang@gmail.com>  
**Copyright**: Thonatos.Yang &lt;https://www.thonatos.com&gt;  
