###H5 History API
在不刷新页面的前提下改变浏览器地址栏中的URL
####方法
1. back()
    - 向后跳转
2. forward()
    - 向前跳转
3. go()
    - 条转到指定位置
4. pushState(state, title, URL)
    - `state`: 状态对象，会传入`popstate`的回调中
    - `title`: 新页面标题，但是目前所有浏览器都忽略这个值
    - `URL`: 新地址，必须与前页面在同一个域
5. replaceState(state, title, URL)
    - 修改当前历史记录，而不是新建一个

6. popstate事件
    - 每当活动的历史记录项发生变化时， popstate 事件都会被传递给window对象。如果当前活动的历史记录项是被 pushState 创建的，或者是由 replaceState 改变的，那么 popstate 事件的状态属性 state 会包含一个当前历史记录状态对象的拷贝
    - `pushState`&`replaceState`不会触发事件