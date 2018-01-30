import axios from 'axios'
let Config = {
    TIMEOUT: 30000,
    baseURL: {
        dev: 'http://mock.eolinker.com/ZXF1aEK62a6c81919359967c3fba0fe8cbb83c9e9046f38?uri=',
        prod: window.BASE_URL?window.BASE_URL:""
    }
};
// axios 配置
axios.defaults.timeout = Config.TIMEOUT;
//axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';
axios.defaults.headers.post['Content-Type'] = 'application/json;charset=UTF-8';
let baseURL = '';
if(Config.baseURL.prod&&Config.baseURL.prod.indexOf('http')>=0){
  baseURL = Config.baseURL.prod;
}else{
  baseURL = Config.baseURL.dev;
}
export function postHeader(url, params) {
    return new Promise((resolve, reject) => {
        axios.post(baseURL + url, params)
            .then(response => {
                resolve(response.headers);
            })
            .catch((error) => {
                reject(error)
            })
    })
}
export function post(url, params) {
    return new Promise((resolve, reject) => {
        axios.post(baseURL + url, params)
            .then(response => {
               resolve(response.data);
            })
            .catch((error) => {
                reject(error)
            })
    })
}
export function get(url, params) {
    return new Promise((resolve, reject) => {
        axios.get(baseURL + url, {params:params})
            .then(response => {
               resolve(response.data);
            })
            .catch((error) => {
               reject(error)
            })
    })
}
