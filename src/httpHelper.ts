import * as request from 'request';
import * as Promise from 'bluebird';
interface proxyObj{
    proxy:string,
    post?:string
}
/**
 * 获取代理url
 * @param proxyObj 代理对象
 */
let getProxyUrl = function(proxyObj:proxyObj){
    return proxyObj.post? proxyObj.proxy+':'+proxyObj.post : proxyObj.proxy;
}

/**
 * http请求帮助类
 * @author dapaer
 */
export class httpHelper{
    /**
     * get方式请求调用
     * @param url 请求地址
     */
    static get(url:string):Promise<any>{
        return new Promise(function(resolve,rej) {
            request.get(url,function(err,httpResponse, data){
                if(!!err){
                    console.log(err);
                }
                resolve(data);
            });
         }); 
    }

    /**
     * post方式请求调用
     * @param url request url
     * @param postData request params
     * 
     */
    static post(url:string,postData:any){
        return new Promise(function(resolve:any,rej:any){
            request.post({url:url, form: postData}, function(err,httpResponse,data){ 
                if(!!err){
                     console.log(err);
                }
                resolve(data);
             })
        })
    }

    /**
     * get方式请求代理调用
     * @param url 请求地址
     * @param proxy 代理对象{proxy;url,post:post}
     */
    static proxyGet(url:string,proxy:proxyObj){
        let proxyUrl = getProxyUrl(proxy);
        let r = request.defaults({'proxy':proxyUrl});
         return new Promise(function(resolve,rej) {
            r.get(url,function(err,httpResponse, data){
                if(!!err){
                     console.log(err);
                }
                resolve(data);
            });
         }); 
    }

    /**
     * post方式请求调用
     * @param url request url
     * @param postData request params
     * @param proxy 代理对象{proxy;url,post:post}
     */
    static proxyPost(url:string,postData:any,proxy:proxyObj){
        let proxyUrl = getProxyUrl(proxy);
        let r = request.defaults({'proxy':proxyUrl});
        return new Promise(function(resolve,rej){
            r.post({url:url, form: postData}, function(err,httpResponse,data){ 
                if(!!err){
                     console.log(err);
                }
                resolve(data);
             })
        })
    }
}
