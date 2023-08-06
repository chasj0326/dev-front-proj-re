<template>
  <ul>
    <li v-for="todo in todos" :key="todo.id">
      <input 
        type="checkbox" 
        @change="$emit('toggleTodo', todo.id)"
        value="todo.completed">
      <div class="todo__text">{{ todo.text }}</div>
      <div 
        class="todo__actions"
        @click="$emit('deleteTodo', todo.id)">
        <button>삭제</button>
      </div>
    </li>
  </ul>
</template>

<script>
export default{
  props:{
   todos: {
    type: Array,
    default: []
   }
  },
  emits: ["toggleTodo", "deleteTodo"]
}
</script>