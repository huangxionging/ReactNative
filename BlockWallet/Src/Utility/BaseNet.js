import axios from 'axios';
import {print} from './Print';

export class BaseNet {
    /**
     * 
     * @param {url 地址} url 
     * @param {参数} data 
     */
    static async getUrl(url, data) {
        let config = {
            params: data,                                                                  
        };
        print(["参数:", data])
        return new Promise((resolve, reject) => {
            axios.get(url, config).then(res => {
                print(["结果:", res])
                resolve(res)
            }).catch(res => {
                print(["错误信息:", res])
                reject(res)
            })
        });
    }
    
    /**
     * 
     * @param {url 地址} url 
     * @param {参数} data 
     */
    static async postUrl(url, data) {
        print(["参数:", data])
        return new Promise((resolve, reject) => {
            axios.post(url, data).then(res => {
                print(["结果:", res])
                resolve(res)
            }).catch(res => {
                print(["错误信息:", res])
                reject(res)
            })
        });
    }
}