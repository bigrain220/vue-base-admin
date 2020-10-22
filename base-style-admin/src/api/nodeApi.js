import API from "@/api/api"
const dataAll = require('../../node/data/index')

const nodeApi = {};
Object.keys(dataAll).map(item => {
    const arr = item.split('/');
    //设置接口名称
    let i = arr[arr.length - 1];
    // console.log(i)
    nodeApi[i] = (params) => {
        return API(dataAll[item].methods, item, params)
    }
})

export default nodeApi