<template>
  <Header />
  <TodoForm />
  <TodoList />
  <TodoControl />
</template>

<script>
import Header from './components/Header.vue';
import TodoForm from './components/TodoForm.vue';
import TodoList from './components/TodoList.vue';
import TodoControl from './components/TodoControl.vue';

export default {
  components: {
    Header,
    TodoForm,
    TodoList,
    TodoControl
  },
  created() {
    this.$store.dispatch('todolist/readTodos')
  }
}
</script>
