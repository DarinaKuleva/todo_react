function clearAll(todoList) {
  return {
    type: 'CLEAR_ALL',
    payload: todoList
  }
}

export default clearAll
