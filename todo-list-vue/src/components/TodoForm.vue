<template>
  <form @submit.prevent="$emit('addTodo', text); this.text=''">
    <input v-model="text">
    <button type="submit">add Todo!</button>
  </form>
</template>

<script>
export default{
  data() {
    return {
      text: ''
    }
  },
  emits: ["addTodo"]
}
</script>