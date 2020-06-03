import Vue from 'vue'
import store from '@/store'
import { getLocalTime } from "@/utils/utils"


Vue.config.errorHandler = function (err, vm, info) {
    Vue.nextTick(() => {
        store.dispatch('addLogsAction', {
            message: err.message,
            stack: err.stack,
            info,
            url: window.location.href,
            time: getLocalTime(new Date())
        });
    })
}