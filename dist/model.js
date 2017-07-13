"use strict";
exports.__esModule = true;
//域名记录
var DomainRecord = (function () {
    function DomainRecord(RR, Type, Value, TTL, Priority, Line) {
        if (TTL === void 0) { TTL = 600; }
        if (Priority === void 0) { Priority = 1; }
        if (Line === void 0) { Line = 'default'; }
        this.RR = RR;
        this.Type = Type;
        this.Value = Value;
        this.TTL = TTL;
        this.Priority = Priority;
        this.Line = Line;
        this.Action = "AddDomainRecord";
    }
    return DomainRecord;
}());
exports.DomainRecord = DomainRecord;
//域名记录
var DescribeDomainQueryParam = (function () {
    function DescribeDomainQueryParam(PageNumber, PageSize, RRKeyWord, TypeKeyWord, ValueKeyWord) {
        this.PageNumber = PageNumber;
        this.PageSize = PageSize;
        this.RRKeyWord = RRKeyWord;
        this.TypeKeyWord = TypeKeyWord;
        this.ValueKeyWord = ValueKeyWord;
        this.Action = "DescribeDomainRecords";
    }
    return DescribeDomainQueryParam;
}());
exports.DescribeDomainQueryParam = DescribeDomainQueryParam;
var c = new DomainRecord("x1", "A", "101.37.22.112");
console.log(c);
