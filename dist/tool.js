"use strict";
exports.__esModule = true;
var crypto_1 = require("crypto");
//对字符串进行编码
function encodeStr(str) {
    return !!str ? encodeURIComponent(str).replace(/\+/g, "%20").replace(/\*/g, "%2A").replace(/\%7E/g, "~") : null;
}
exports.encodeStr = encodeStr;
/**
 * 验证accessKey和secret
 * @param key accessKey
 * @param secret secret
 */
var valiKeyAndSecret = function (key, secret) {
    if (!key) {
        throw 'accessKeyId must not be null';
    }
    if (!secret) {
        throw 'secret must not be null';
    }
};
var SEPARATOR = "&";
var HTTP_METHOD = "GET";
var baseReqUrl = "http://alidns.aliyuncs.com";
exports.getQueryUrl = function (accessKeyId, secret, params) {
    valiKeyAndSecret(accessKeyId, secret);
    var queryObj = {};
    queryObj.Action = "DescribeDomainRecords";
    queryObj.DomainName = "dapaer.cn";
    queryObj.Version = "2015-01-09";
    queryObj.AccessKeyId = accessKeyId;
    queryObj.Timestamp = (new Date()).toISOString().split('.')[0] + "Z" + "";
    queryObj.SignatureMethod = "HMAC-SHA1";
    queryObj.SignatureVersion = "1.0";
    queryObj.SignatureNonce = Math.floor((Math.random() * 1000));
    ;
    queryObj.Format = "JSON";
    Object.assign(queryObj, params);
    var sortedKeys = Object.keys(queryObj).sort();
    var stringToSign = [HTTP_METHOD, SEPARATOR, encodeStr("/"), SEPARATOR].join('');
    var canonicalizedQueryString = "";
    var queryString = "";
    for (var _i = 0, sortedKeys_1 = sortedKeys; _i < sortedKeys_1.length; _i++) {
        var key_1 = sortedKeys_1[_i];
        if (!!queryObj[key_1]) {
            // 这里注意对key和value进行编码
            canonicalizedQueryString += "&" + encodeStr(key_1) + "=" + encodeStr(queryObj[key_1]);
        }
    }
    stringToSign += (encodeStr(canonicalizedQueryString.toString().substring(1)));
    var ALGORITHM = "HmacSHA1";
    var ENCODING = "UTF-8";
    var key = new Buffer(secret + "&", ENCODING);
    var Signature = crypto_1.createHmac('sha1', key).update(stringToSign).digest().toString('base64'); //base64  
    queryObj.Signature = Signature;
    sortedKeys = Object.keys(queryObj).sort();
    for (var _a = 0, sortedKeys_2 = sortedKeys; _a < sortedKeys_2.length; _a++) {
        var key_2 = sortedKeys_2[_a];
        if (!!queryObj[key_2]) {
            queryString += "&" + key_2 + "=" + encodeStr(queryObj[key_2]);
        }
    }
    console.log("post url " + baseReqUrl + "/?" + queryString.substr(1));
    return baseReqUrl + "/?" + queryString.substr(1);
};
