//域名记录
export class DomainRecord{
    private Action:string = "AddDomainRecord";
    constructor(private RR:string,
    private Type:string,
    private Value:string,
    private TTL=600,
    private Priority=1,
    private Line='default'){

    }
}

//域名记录
export class DescribeDomainQueryParam{
    private Action:string = "DescribeDomainRecords";
    constructor(private PageNumber?:number,
    private PageSize?:number,
    private RRKeyWord?:string,
    private TypeKeyWord?:string,
    private ValueKeyWord?:string
    ){

    }
}   


let c = new DomainRecord("x1","A","101.37.22.112");
console.log(c);