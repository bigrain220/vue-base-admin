import Vue from 'vue';
import VueI18n from 'vue-i18n'
import elementEnLocale from 'element-ui/lib/locale/lang/en' // element-ui lang
import elementZhLocale from 'element-ui/lib/locale/lang/zh-CN'// element-ui lang
import enLocale from './en'
import zhLocale from './zh'
import { getStorage } from '@/utils/store'

Vue.use(VueI18n)

const messages = {
    zh: {
        ...zhLocale,
        ...elementZhLocale
    },
    en: {
      ...enLocale,
      ...elementEnLocale
    }
  }
// 注册 `formatter` 选项
const i18n = new VueI18n({
    locale: getStorage({ name: 'language' }) || 'zh',
    messages
  })

export default i18n