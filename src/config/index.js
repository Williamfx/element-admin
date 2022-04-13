/**
 * 环境配置封装
 */
const env =
    import.meta.env.MODE || 'prod';
const EnvConfig = {
    dev: {
        baseApi: '/api',
        mockApi: 'http://127.0.0.1:4523/mock/843894/api'
    },
    test: {
        baseApi: '/',
        mockApi: 'http://127.0.0.1:4523/mock/843894/api'
    },
    prod: {
        baseApi: '/',
        mockApi: 'http://127.0.0.1:4523/mock/843894/api'
    }
}
export default {
    env,
    mock: false,
    namespace: 'manager',
    ...EnvConfig[env]
}