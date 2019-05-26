function addTodo(newTask) {
  return {
    type: 'ADD_TODO',
    payload: newTask
  }
}

export default addTodo
