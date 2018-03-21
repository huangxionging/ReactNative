import { BaseNet, BaseURL, print, CacheStorage } from '../../../Utility';
const loginSMSCodeURL = "api/smscode/generate"
const loginURL = "api/wallet/login"

export class LoginManager {
    static getVerifyCode(data, callBack) {
        let url = BaseURL.baseDomain + loginSMSCodeURL
        BaseNet.getUrl(url, data).then(res => {
            callBack(res)
        }).catch(res => {
            callBack(res)
        })
    }

    static login(data, callBack) {
        let url = BaseURL.baseDomain + loginURL
        BaseNet.getUrl(url, data).then(res => {
            let result = res.data
            if (result.code != undefined && result.code == "success") {
                callBack(result.data)
            }
            
        }).catch(res => {
            callBack(res)
        })
    }
}