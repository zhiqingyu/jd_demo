import axios from "axios";
const instance = axios.create({
    baseURL: 'https://www.fastmock.site/mock/ae8e9031947a302fed5f92425995aa19/jd',
    timeout: 1000,
});
export const get = (url) => {
    return new Promise((resolve, reject) => {
        instance.get(url).then(
            (response) => {
                resolve(response.data);
            },
            (err) => {
                reject(err+'请求失败');
            }
        );
    });
};