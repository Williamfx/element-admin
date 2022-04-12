/**
 * 环境配置封装
 */
const env =
    import.meta.env.MODE || 'prod';
const EnvConfig = {
    dev: {
        baseApi: '/',
        mockApi: 'http://127.0.0.1:4523/mock/843894/'
    },
    test: {
        baseApi: '/',
        mockApi: 'http://127.0.0.1:4523/mock/843894/'
    },
    prod: {
        baseApi: '/',
        mockApi: 'http://127.0.0.1:4523/mock/843894/'
    }
}
export default {
    env,
    mock: true,
    namespace: 'manager',
    ...EnvConfig[env]
}