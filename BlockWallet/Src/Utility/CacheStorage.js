
import { AsyncStorage } from 'react-native';
import Storage from 'react-native-storage';
var _storage = new Storage({
    size: 1000,
    storageBackend: AsyncStorage,
    defaultExpires: null
})

// global.storage = _storage


export class CacheStorage {
    
    static getStorageSync(key = "", callBack) {
        _storage.load({
            key: key,
        }).then(res => {
            callBack({
                success: {
                    state: true,
                    res: res
                },
                fail: null
            })
        }).catch(res => {
            callBack({
                success: null,
                fail:  {
                    state: true,
                    res: res
                }
            })
        }) 
    }

    static setStorageSync(key = "", value, callBack) {
        _storage.save({
            key: key,
            data: value,
            expires: null
        }).then(res => {
            callBack({
                success: {
                    state: true,
                    res: res
                },
                fail: null
            })
        }).catch(res => {
            callBack({
                success: null,
                fail:  {
                    state: true,
                    res: res
                }
            })
        })
    }

    static removeStorageSync(key = "", callBack) {
        _storage.remove({
            key: key
        }).then(res => {
            callBack({
                success: {
                    state: true,
                    res: res
                },
                fail: null
            })
        }).catch(res => {
            callBack({
                success: null,
                fail:  {
                    state: true,
                    res: res
                }
            })
        })
    }
    
}