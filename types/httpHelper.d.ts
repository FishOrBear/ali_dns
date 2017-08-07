/// <reference types="bluebird" />
import * as Promise from 'bluebird';
export interface proxyObj {
    proxy: string;
    post?: string;
}
/**
 * http请求帮助类
 * @author dapaer
 */
export declare class httpHelper {
    /**
     * get方式请求调用
     * @param url 请求地址
     */
    static get(url: string): Promise<any>;
    /**
     * post方式请求调用
     * @param url request url
     * @param postData request params
     *
     */
    static post(url: string, postData: any): Promise<{}>;
    /**
     * get方式请求代理调用
     * @param url 请求地址
     * @param proxy 代理对象{proxy;url,post:post}
     */
    static proxyGet(url: string, proxy: proxyObj): Promise<{}>;
    /**
     * post方式请求调用
     * @param url request url
     * @param postData request params
     * @param proxy 代理对象{proxy;url,post:post}
     */
    static proxyPost(url: string, postData: any, proxy: proxyObj): Promise<{}>;
}
