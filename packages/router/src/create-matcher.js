export default function createMatcher(router, routes) {

  function match(location) {
    const route = routes.filter(r => r.path === location)?.[0]

    console.log('match', route, location)

    return createRoute(route, router)

  }

  return {match}
  
}

function createRoute(route, router) {

  return {
    // eslint-disable-next-line no-dupe-keys
    name: route.name,
    meta: route.meta,
    router,
    matched: [route]
  }
}