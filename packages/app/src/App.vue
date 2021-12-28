<template>
  <div id="app">
 
    <HelloWorld ref="hd" msg="Welcome to Your Vue.js App" @click="console.log(221)"><template #default="scope">{{scope}}</template></HelloWorld>
    <my-router-link to="/a">a</my-router-link>
    <my-router-link to="/b">b</my-router-link>
    <my-router-view></my-router-view>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
  },
  mounted() {
    console.log(this, this.$router, this.$route)
  },
  render(h) {
    return h(HelloWorld)
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
