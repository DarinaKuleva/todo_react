function crossOutTodo( todoList ) {
  return {
    type: 'CROSS_OUT_TODO',
    payload: todoList
  }
}

export default crossOutTodo
