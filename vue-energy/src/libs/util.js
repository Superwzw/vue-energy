import axios from 'axios';
import qs from 'qs';

let util = {

};
util.title = function (title) {
    title = title || 'Eric-energy';
    window.document.title = title;
};

const ajaxUrl = 'http://192.168.142.130:8000';

util.ajax = axios.create({
    baseURL: ajaxUrl,
    timeout: 30000
});

util.post = function (url,data) {
    return util.ajax({
        url: url,
        method: 'post',
        data:qs.stringify(data,{ arrayFormat: "repeat"})////这里用qs处理数据，数组转成不带下标

    })
    .then(response => { //成功
        return response;
    })
    .catch(error => { //失败
        return error;
    })
}
export default util;
