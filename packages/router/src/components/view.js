/**
 * router-view组件
 * 
 */

export default {
  name: 'RouterView',
  functional: true,
  render(_, { parent, data}) {
    data.routerView = true

    const h = parent.$createElement
    
    const route = parent.$route
    console.log('routerRoot', parent._routerRoot._route, parent._routerRoot._router)

    const component = route.matched[0].component

    return h(component)
    
  }
}