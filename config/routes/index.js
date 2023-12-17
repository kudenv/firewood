const {MAIN_ROUTES_TABLE} = require('./main.routes');

const MAIN_ROUTES = (mainPath = '') => {
    const mainRoutePaths = MAIN_ROUTES_TABLE(mainPath, wrappers) ;

    return {
        exact: false,
        path: `${mainPath}/`,
        component: '@/layouts',
        routes: [
            ...mainRoutePaths
        ]

    }
}

module.exports = { MAIN_ROUTES };