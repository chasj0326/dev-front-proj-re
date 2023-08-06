<template>
  <ul>
    <li v-for="{id, text, completed} in todos" :key="id">
      <div
        class="todo__check"
        @click="toggleItem(id)"
        :class="{completed}"></div>
      <div class="todo__text">{{ text }}</div>
      <div class="todo__actions">
        <button @click="deleteItem(id)">삭제</button>
      </div>
    </li>
  </ul>
</template>

<script>
export default{
  computed: {
    todos() {
      return this.$store.state.todolist.todos;
    }
  },
  methods: {
    toggleItem(id) {
      this.$store.commit('todolist/toggleTodo', id);
      this.$store.dispatch('todolist/storeTodos');
    },
    deleteItem(id) {
      this.$store.commit('todolist/deleteTodo', id);
      this.$store.dispatch('todolist/storeTodos');
    }
  }
}
</script>

<style lang="scss" scoped>
li {
  display: flex;
  gap: 20px;
  margin: 10px 0;
}
.todo__check{
  width: 20px;
  height: 20px;
  cursor: pointer;
  background-color: rgba(0,0,0,.1);
  &.completed{
    background-color: orangered;
  }
}
</style>