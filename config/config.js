var API_VERSION = ['api', 'api-test'],
    CONFIG_MONGO = {
        _MONGO_LINK = "mongodb://admin:admin@ds155218.mlab.com:55218/cinema"
    },

    CONFIG_API = {
        // API Security
        __API_AUTHOR: 'Nguyen Thanh Thien 658JJH',
        __API_KEY: 'wx0z34ajQVSm5xdhZa7ygStlAbRVnfNC',
        __API_SECRET: 'iP]Y@!_zPnxvKgy;C58#z=}D9YzS(Z',

        // Link API
        __link_user: API_VERSION[0] + '/user/', // USER
        __link_film: API_VERSION[0] + '/film/',
        __link_category: API_VERSION[0] + '/category/',

        // Link Admin
        __link_admin: 'admin',

        // Link reset password
        __link_reset_password: '/auth/reset-password/?access_token=',
        __route_reset_password: '/auth/reset-password',

        // MongoDB Config
        __database_name: 'cinema',
        __admin_name: 'admin',
        __admin_password: 'admin'
    }

exports.CONFIG_MONGO = CONFIG_MONGO
exports.CONFIG_API = CONFIG_API