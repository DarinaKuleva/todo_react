export default function reducer(state, action) {
  if (action.type === 'ADD_TODO') {
    return {
      todoList: [...state.todoList, action.payload]
    }
  }
  if (action.type === 'CLEAR_ALL' || action.type === 'REMOVE_TODO' || action.type === 'CROSS_OUT_TODO') {
    return {

      todoList: action.payload.todoList,
      doneCounter: action.payload.doneCounter,
      nextId:action.payload.nextId

    };
  }
  return state;
}
