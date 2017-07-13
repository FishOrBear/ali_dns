import {createHmac} from 'crypto';
import {httpHelper} from './httpHelper';
//对字符串进行编码
export function encodeStr(str:string){
	return !!str ?encodeURIComponent(str).replace(/\+/g,"%20").replace(/\*/g, "%2A").replace(/\%7E/g, "~"):null;
}

/**
 * 验证accessKey和secret
 * @param key accessKey
 * @param secret secret 
 */
let valiKeyAndSecret = function(key:string,secret:string){
    if(!key){
        throw 'accessKeyId must not be null';
    }
    if(!secret){
        throw 'secret must not be null';
    }
}

const SEPARATOR:string = "&";
const HTTP_METHOD:string = "GET";
const baseReqUrl="http://alidns.aliyuncs.com";
export const getQueryUrl  = function (domain:string,accessKeyId:string,secret:string,params:any):string{
	valiKeyAndSecret(accessKeyId,secret);
	let queryObj:any = {};
	queryObj.Action="DescribeDomainRecords";
	queryObj.DomainName=domain;
	queryObj.Version="2015-01-09";
	queryObj.AccessKeyId=accessKeyId;
	queryObj.Timestamp=(new Date()).toISOString().split('.')[0]+"Z"+"";
	queryObj.SignatureMethod="HMAC-SHA1";
	queryObj.SignatureVersion="1.0";
	queryObj.SignatureNonce=Math.floor((Math.random()*1000));;
	queryObj.Format="JSON";
	(<any>Object).assign(queryObj,params);
	let sortedKeys:string[] =  Object.keys(queryObj).sort();

	let stringToSign:string = [HTTP_METHOD,SEPARATOR,encodeStr("/"),SEPARATOR].join('');

	let canonicalizedQueryString:string = "";
	let queryString = "";

	for(let key of sortedKeys) {
		if(!!queryObj[key]){
			// 这里注意对key和value进行编码
			canonicalizedQueryString+=`&${encodeStr(key)}=${encodeStr(queryObj[key])}`;
		}
	}

	stringToSign+=(encodeStr(canonicalizedQueryString.toString().substring(1)));

	const  ALGORITHM:string = "HmacSHA1";
	const  ENCODING:string = "UTF-8";
	let key:Buffer = new Buffer(`${secret}&`,ENCODING);
	let Signature = createHmac('sha1',key).update(stringToSign).digest().toString('base64'); //base64  
	queryObj.Signature = Signature;
	sortedKeys =  Object.keys(queryObj).sort();
	for(let key of sortedKeys) {
		if(!!queryObj[key]){
			queryString+=`&${key}=${encodeStr(queryObj[key])}`;
		}
	}
	console.log(`post url ${baseReqUrl}/?${queryString.substr(1)}`);
	return `${baseReqUrl}/?${queryString.substr(1)}`
}
