const MAIN_ROUTES_TABLE = () => {
    return [
        {
          path: `${mainPath}`,
          redirect: `${mainPath}/feed`
        },      
        {
          exact: true,
          path: `${mainPath}/profile/:profileId`,
          breadcrumb: 'route.profile',
          component: '@/pages/profile',
          wrappers
        },
        {
          exact: true,
          path: `${mainPath}/network`,
          breadcrumb: 'route.network',
          component: '@/pages/network',
          wrappers
        },
        {
          exact: true,
          path: `${mainPath}/feed`,
          breadcrumb: 'route.feed',
          component: '@/pages/feed',
          wrappers
        },
        {
          exact: true,
          path: `${mainPath}/network/invitations`,
          breadcrumb: 'route.network.invitations',
          component: '@/pages/invitations',
          wrappers
        },
        {
          exact: true,
          path: `${mainPath}/network/connections`,
          breadcrumb: 'route.network.connections',
          component: '@/pages/connections',
          wrappers
        },
      ];

}

module.exports = { MAIN_ROUTES_TABLE };