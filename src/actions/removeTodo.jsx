function removeTodo( todoList ) {
  return {
    type: 'REMOVE_TODO',
    payload: todoList
  }
}

export default removeTodo
