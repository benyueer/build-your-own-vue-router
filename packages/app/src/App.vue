<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld ref="hd" msg="Welcome to Your Vue.js App" @click="console.log(221)"><template #default="scope">{{scope}}</template></HelloWorld>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

console.log(HelloWorld, 1111)
export default {
  name: 'App',
  components: {
    HelloWorld
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
