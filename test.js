var urlencode = require('urlencode');
 
console.log(urlencode('中文')); // default is utf8 
console.log(urlencode('中文', 'gbk')); // '%CB%D5%C7%A7' 
console.log(urlencode.decode("%25E4%25B8%25AD%25E6%2596%2587")); // 这是我从邮件里复制的字符串