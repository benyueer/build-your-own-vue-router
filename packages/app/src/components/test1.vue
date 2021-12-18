<script>
export default {
  name: 'test1',
  functional: true,
  render(_, context) {
    console.log(_, context)
    const h = context.parent.$createElement
    return h()
  },
}
</script>