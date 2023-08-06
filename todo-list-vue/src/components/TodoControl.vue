<template>
  <div>
    <button @click="toggleControl">TOGGLE ALL</button>
    <button @click="deleteControl">DELETE COMPLETED</button>
  </div>
</template>

<script>
export default {
  methods: {
    toggleControl(){
      this.$store.commit('todolist/toggleAllTodos');
      this.$store.dispatch('todolist/storeTodos');
    },
    deleteControl(){
      this.$store.commit('todolist/deleteCompletedTodos');
      this.$store.dispatch('todolist/storeTodos');
    }
  }
}
</script>