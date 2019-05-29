function filterDone(todoList) {
  return {
    type: 'FILTER_DONE',
    payload: {
      todoList
    }
  }
}

export default filterDone
