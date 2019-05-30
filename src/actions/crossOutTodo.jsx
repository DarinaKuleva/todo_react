function crossOutTodo( id ) {
  return {
    type: 'CROSS_OUT_TODO',
    payload: id
  }
}

export default crossOutTodo
