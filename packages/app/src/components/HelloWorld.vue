<template>
  <div class="hello">
    <div class="red" ref="div">
      <p>hello worl{{getData()}}</p>
    </div>
    <slot :data="smsg"></slot>
    <test1></test1>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data() {
    return {
      smsg: 'hello'
    }
  },
  mounted() {
    console.log(this)
    setInterval(() => {
      // console.log(this.$refs.div)
      const d = Math.floor((Math.random()*18)%10) % 2 === 0
      const className = d ? 'red' : 'blue'
      this.$refs.div.classList.remove('red')
      this.$refs.div.classList.remove('blue')
      this.$refs.div.classList.add(className)
      
      console.log(d)
    },2000)
  },
  methods: {
    getData() {
      return Math.random()
    }
  },
  render() {
    return(
      <div>HelloWorld</div>
    )
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.red {
  color: red;
}
.blue {
  color: blue;
}
</style>
