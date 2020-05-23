import {INCREMENT,DECREMENT} from "../types";

const state ={
    count:5
}

// 定义 getters
var getters ={
    count(state){
        return state.count
    },
    isEvenOrOdd(state){
        return state.count % 2 == 0 ? "偶数" : "奇数"
    }
}

const actions ={
    increment(context){
        // 此处提交的事件与下方 mutations 中的 INCREMENT 对应
        //与原来 commit('increment') 的原理相同，只是把类型名换成了常量
        context.commit(INCREMENT)
    },
    decrement({commit,state}){
        if (state.count>-10000) {
            // 此处提交的事件与下方 mutations 中的 DECREMENT 对应
            commit(DECREMENT)
        }
    },
    incrementAsync({ commit }) {
        // 异步操作
        var p = new Promise((resolve) => {
            setTimeout(() => {
                resolve()
            }, 3000);
        });
        p.then(() => {
            commit(INCREMENT);
        }).catch(() => {
            console.log('异步操作');
        })
    }
}

// 我们可以使用 ES2015 风格的计算属性命名功能来使用一个常量作为函数名
const mutations ={
    // 此处的事件为上方 actions 中的 commit(INCREMENT)
    [INCREMENT](state){
        state.count++
    },
    // 此处的事件为上方 actions 中的 commit(DECREMENT)
    [DECREMENT](state){
        state.count--
    }
}
// 最后统一导出
export default {
    state,
    getters,
    actions,
    mutations
}