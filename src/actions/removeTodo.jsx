function removeTodo(todoList, nextId, doneCounter) {
  return {
    type: 'REMOVE_TODO',
    payload: {
      todoList, nextId, doneCounter
    }
  }
}

export default removeTodo
