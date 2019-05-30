function removeTodo( id ) {
  return {
    type: 'REMOVE_TODO',
    payload: id
  }
}

export default removeTodo
