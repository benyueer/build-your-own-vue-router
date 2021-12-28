/**
 * router-link组件
 * to表示路由地址
 * 渲染默认插槽的内容
 */
export default {
  name: 'RouterLink',
  props: {
    to: {
      type: String,
      required: true
    },
    tag: {
      type: String,
      default: 'a'
    }
  },
  render(h) {

    // const current = this.$route
    // const { location } = this.$router.resolve(
    //   this.to,
    //   current
    // )

    const handler = () => {
      this.$router.push(this.to)
    }

    const data = {
      on: {
        click: handler
      }
    }
    return h(this.tag, data, this.$slots.default)
  }
}