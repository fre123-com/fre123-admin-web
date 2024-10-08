import piniaPersistConfig from '@/config/piniaPersist'
import { createPinia, defineStore } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
import { GlobalState, ThemeConfigProp } from './interface'

// defineStore 调用后返回一个函数，调用该函数获得 Store 实体
export const GlobalStore = defineStore({
  // id: 必须的，在所有 Store 中唯一
  id: 'GlobalState',
  // state: 返回对象的函数
  state: (): GlobalState => ({
    // token
    token: '',
    // userInfo
    userInfo: '',
    appUserName: '',
    // themeConfig
    themeConfig: {
      // 面包屑导航
      breadcrumb: true,
      // 标签页
      tabs: true,
      // 页脚
      footer: true,
    },
  }),
  getters: {},
  actions: {
    // setToken
    setToken(token: string) {
      this.token = token
    },
    // setUserInfo
    setUserInfo(userInfo: any) {
      this.userInfo = userInfo
    },
    setAppUserName(appUserName: string) {
      this.appUserName = appUserName
    },
    // setThemeConfig
    setThemeConfig(themeConfig: ThemeConfigProp) {
      this.themeConfig = themeConfig
    },
  },
  persist: piniaPersistConfig('GlobalState'),
})

// piniaPersist(持久化)
const pinia = createPinia()
pinia.use(piniaPluginPersistedstate)

export default pinia
