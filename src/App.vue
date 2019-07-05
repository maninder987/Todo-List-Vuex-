<template>
  <div id="app">
    <addtodo msg="Welcome to Todo List"/>
    <todo />
  </div>
</template>

<script>
import todo from './components/Todo.vue'
import addtodo from './components/Addtodo.vue'
export default {
  name: 'app',
  components: {
    todo,
    addtodo
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
