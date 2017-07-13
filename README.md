## ali_dns
- request
- bluebird

## Install
```bash
npm/cnpm install ali_dns
```
## use
```javascript
var DomainHelper = require("ali_dns").DomainHelper;
DomainHelper.accessKeyId = 'your key';
DomainHelper.secret = 'your secret';
DomainHelper.domain = 'dapaer.cn';
DomainHelper.delDomainRecord('recordId').then( (data)=> {
    //......
});
/**
* wx.dapaer.cn =>192.168.0.`
*@params ip : 192.168.0.1
*@params rr : wx
**/
DomainHelper.addDomainRecord(ip,rr).then( (data)=> {
    //......
});
//get the domainRecord list
DomainHelper.getDomainRecordList().then( (data)=> {
    //......
});    
```

