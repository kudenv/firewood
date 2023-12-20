const MAIN_ROUTES_TABLE = () => {
    return [
        {
          path: `${mainPath}`,
          redirect: `${mainPath}/feed`,
          breadcrumb: 'route.feed',
          component: '@/pages/feed',
          wrappers
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
          path: `${mainPath}/invitations`,      
          breadcrumb: 'route.network.invitations',
          component: '@/pages/invitations',
          wrappers
        },
        {
          exact: true,
          path: `${mainPath}/connections`,
          breadcrumb: 'route.network.connections',
          component: '@/pages/connections',
          wrappers
        },
        {
          exact: false,
          path: `${mainPath}/messaging`,
          breadcrumb: 'route.network.messaging',
          component: '@/pages/messaging',
          wrappers
        },
      ];

}

module.exports = { MAIN_ROUTES_TABLE };