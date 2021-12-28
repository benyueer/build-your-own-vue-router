<script>
export default {
  name: 'test1',
  functional: true,
  render(h) {
    // console.log(111)
    // const h = context.parent.$createElement
    // return (<div>a-comp</div>)
    return h('div', null, 'a-comp')
  },
}
</script>