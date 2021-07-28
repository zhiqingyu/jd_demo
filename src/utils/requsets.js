import { axios } from "axios/dist/axios";
export const get = (url, params) => {
    return new Promise((resolve, reject) => {
        axios.get(url, params, {
            baseURL: 'https://www.fastmock.site/mock/ae8e9031947a302fed5f92425995aa19/jd',
        }).then((response)=>{
            resolve(response.data)
        },err=>{
            reject(err)
        })
    })
}