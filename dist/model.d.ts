export declare class DomainRecord {
    private RR;
    private Type;
    private Value;
    private TTL;
    private Priority;
    private Line;
    private Action;
    constructor(RR: string, Type: string, Value: string, TTL?: number, Priority?: number, Line?: string);
}
export declare class DescribeDomainQueryParam {
    private PageNumber;
    private PageSize;
    private RRKeyWord;
    private TypeKeyWord;
    private ValueKeyWord;
    private Action;
    constructor(PageNumber?: number, PageSize?: number, RRKeyWord?: string, TypeKeyWord?: string, ValueKeyWord?: string);
}
