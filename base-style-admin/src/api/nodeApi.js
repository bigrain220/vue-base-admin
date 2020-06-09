import API from "@/api/api"
const dataAll = require('../../node/data/index')

const nodeApi={};
Object.keys(dataAll).map(item => {
    let i=item.slice(1);
    nodeApi[i]=(params)=>{
        return API(dataAll[item].methods,item, params)
    }
})

export default nodeApi