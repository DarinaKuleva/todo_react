export default function reducer( state, action ) {
  switch ( action.type ) {
    case 'ADD_TODO':
      return {
        todoList: [...state.todoList, action.payload],
      }
    case 'REMOVE_TODO':
      return {
        todoList: action.payload
      }
    case 'CLEAR_ALL':
      return {
        todoList: [],
      }
    case 'CROSS_OUT_TODO':
      return {
        todoList: action.payload
      }
    default:
      return state

  }
}
