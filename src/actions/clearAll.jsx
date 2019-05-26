function clearAll() {
  return {
    type: 'CLEAR_ALL',
    payload: {
      todoList: [],
      doneCounter: 0,
      nextId: 1
    }
  }
}

export default clearAll
