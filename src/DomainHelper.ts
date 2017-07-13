import {DomainRecord,DescribeDomainQueryParam} from './model';

import {getQueryUrl} from './tool';

import {httpHelper} from './httpHelper'



export class DomainHelper{
    static accessKeyId:string;
    static secret:string;
    static domain:string;
    /**
     * 增加／修改解析记录
     * @param ip 解析地址 
     * @param rr 主机记录
     * @param type 类型：默认A
     */
    static addDomainRecord(ip:string,rr:string,type='A'):Promise<any>{
        let record = new DomainRecord(rr,type,ip);
        let addDomainRecordUrl:string = getQueryUrl(DomainHelper.domain,DomainHelper.accessKeyId,DomainHelper.secret,record);
        return httpHelper.get(addDomainRecordUrl);
    }

    /**
     * 获取类型列表
     */
    static getDomainRecordList():Promise<any>{
        let record = new DescribeDomainQueryParam();
        let addDomainRecordUrl:string = getQueryUrl(DomainHelper.domain,DomainHelper.accessKeyId,DomainHelper.secret,record);
        return httpHelper.get(addDomainRecordUrl);
    }

    /**
     * 获取类型列表
     */
    static delDomainRecord(recordId:string):Promise<any>{
        let addDomainRecordUrl:string = getQueryUrl(DomainHelper.domain,DomainHelper.accessKeyId,DomainHelper.secret,{Action:'DeleteDomainRecord',RecordId:recordId});
        return httpHelper.get(addDomainRecordUrl);
    }

}
