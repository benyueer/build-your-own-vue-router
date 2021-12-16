###基本流程
- 设置路由表routes
- 新建VueRouter类，传入routes
- 使用插件Router

###原理
- 根据传入的路由表生成路由
- 在Vue上添加\$router和\$route属性，router表示路由对象，route表示当前路由
- router-link组件供用户跳转路由
- router-view组件显示匹配的路由对应的组件
####history
- 监听```popstate```，