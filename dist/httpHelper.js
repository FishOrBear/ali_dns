"use strict";
exports.__esModule = true;
var request = require("request");
var Promise = require("bluebird");
/**
 * 获取代理url
 * @param proxyObj 代理对象
 */
var getProxyUrl = function (proxyObj) {
    return proxyObj.post ? proxyObj.proxy + ':' + proxyObj.post : proxyObj.proxy;
};
/**
 * http请求帮助类
 * @author dapaer
 */
var httpHelper = (function () {
    function httpHelper() {
    }
    /**
     * get方式请求调用
     * @param url 请求地址
     */
    httpHelper.get = function (url) {
        return new Promise(function (resolve, rej) {
            request.get(url, function (err, httpResponse, data) {
                if (!!err) {
                    console.log(err);
                }
                resolve(data);
            });
        });
    };
    /**
     * post方式请求调用
     * @param url request url
     * @param postData request params
     *
     */
    httpHelper.post = function (url, postData) {
        return new Promise(function (resolve, rej) {
            request.post({ url: url, form: postData }, function (err, httpResponse, data) {
                if (!!err) {
                    console.log(err);
                }
                resolve(data);
            });
        });
    };
    /**
     * get方式请求代理调用
     * @param url 请求地址
     * @param proxy 代理对象{proxy;url,post:post}
     */
    httpHelper.proxyGet = function (url, proxy) {
        var proxyUrl = getProxyUrl(proxy);
        var r = request.defaults({ 'proxy': proxyUrl });
        return new Promise(function (resolve, rej) {
            r.get(url, function (err, httpResponse, data) {
                if (!!err) {
                    console.log(err);
                }
                resolve(data);
            });
        });
    };
    /**
     * post方式请求调用
     * @param url request url
     * @param postData request params
     * @param proxy 代理对象{proxy;url,post:post}
     */
    httpHelper.proxyPost = function (url, postData, proxy) {
        var proxyUrl = getProxyUrl(proxy);
        var r = request.defaults({ 'proxy': proxyUrl });
        return new Promise(function (resolve, rej) {
            r.post({ url: url, form: postData }, function (err, httpResponse, data) {
                if (!!err) {
                    console.log(err);
                }
                resolve(data);
            });
        });
    };
    return httpHelper;
}());
exports.httpHelper = httpHelper;
