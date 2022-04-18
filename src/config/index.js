/**
 * 环境配置封装
 */
const env =
    import.meta.env.MODE || 'prod';
const EnvConfig = {
    dev: {
        baseApi: '/api',
        mockApi: 'https://www.fastmock.site/mock/cbd39120df890ebff136e63eedba4ce1/api'
    },
    test: {
        baseApi: '/',
        mockApi: 'https://www.fastmock.site/mock/cbd39120df890ebff136e63eedba4ce1/api'
    },
    prod: {
        baseApi: '/',
        mockApi: 'https://www.fastmock.site/mock/cbd39120df890ebff136e63eedba4ce1/api'
    }
}
export default {
    env,
    mock: true,
    namespace: 'manager',
    ...EnvConfig[env]
}