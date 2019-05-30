function addTodo(todoText) {
  return {
    type: 'ADD_TODO',
    payload: todoText
  }
}

export default addTodo
