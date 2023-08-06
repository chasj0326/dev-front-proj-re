<template>
  <form @submit.prevent="submit">
    <input ref="input">
    <button type="submit">add Todo!</button>
  </form>
</template>

<script>
export default{
  methods: {
    submit(){
      this.$store.commit('todolist/createTodo', this.$refs.input.value);
      this.$store.dispatch('todolist/storeTodos');
      this.$refs.input.value = '';
    }
  }
}
</script>