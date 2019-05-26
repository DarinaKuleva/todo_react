function crossOutTodo(todoList, doneCounter, nextId) {
  return {
    type: 'CROSS_OUT_TODO',
    payload: {
      todoList, doneCounter, nextId
    }
  }
}

export default crossOutTodo
