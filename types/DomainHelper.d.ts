export declare class DomainHelper {
    static accessKeyId: string;
    static secret: string;
    static domain: string;
    /**
     * 增加／修改解析记录
     * @param ip 解析地址
     * @param rr 主机记录
     * @param type 类型：默认A
     */
    static addDomainRecord(ip: string, rr: string, type?: string): Promise<any>;
    /**
     * 获取类型列表
     */
    static getDomainRecordList(): Promise<any>;
    /**
     * 获取类型列表
     */
    static delDomainRecord(recordId: string): Promise<any>;
}
