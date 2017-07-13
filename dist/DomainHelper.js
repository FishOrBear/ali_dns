"use strict";
exports.__esModule = true;
var model_1 = require("./model");
var tool_1 = require("./tool");
var httpHelper_1 = require("./httpHelper");
var DomainHelper = (function () {
    function DomainHelper() {
    }
    /**
     * 增加／修改解析记录
     * @param ip 解析地址
     * @param rr 主机记录
     * @param type 类型：默认A
     */
    DomainHelper.addDomainRecord = function (ip, rr, type) {
        if (type === void 0) { type = 'A'; }
        var record = new model_1.DomainRecord(rr, type, ip);
        var addDomainRecordUrl = tool_1.getQueryUrl(DomainHelper.accessKeyId, DomainHelper.secret, record);
        return httpHelper_1.httpHelper.get(addDomainRecordUrl);
    };
    /**
     * 获取类型列表
     */
    DomainHelper.getDomainRecordList = function () {
        var record = new model_1.DescribeDomainQueryParam();
        var addDomainRecordUrl = tool_1.getQueryUrl(DomainHelper.accessKeyId, DomainHelper.secret, record);
        return httpHelper_1.httpHelper.get(addDomainRecordUrl);
    };
    /**
     * 获取类型列表
     */
    DomainHelper.delDomainRecord = function (recordId) {
        var addDomainRecordUrl = tool_1.getQueryUrl(DomainHelper.accessKeyId, DomainHelper.secret, { Action: 'DeleteDomainRecord', RecordId: recordId });
        return httpHelper_1.httpHelper.get(addDomainRecordUrl);
    };
    return DomainHelper;
}());
exports.DomainHelper = DomainHelper;
