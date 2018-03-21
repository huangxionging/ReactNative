import { BaseURL } from './BaseURL';
export function print(message) {
    // console.log(message)
    if (BaseURL.debug) {
        console.log(message)
    }
}