export default function reducer( state, action ) {
  switch ( action.type ) {
    case 'ADD_TODO':
      return {
        todoList: [...state.todoList, action.payload],
        nextId: state.nextId + 1,
      }
    case 'REMOVE_TODO':
      return {
        ...state,
        todoList: action.payload
      }
    case 'CROSS_OUT_TODO':
      return {
        ...state,
        todoList: action.payload
      }
    case 'MAKE_FAST':
      return {
        ...state,
        todoList: action.payload
      }
    case 'CLEAR_ALL':
      return {
        todoList: [],
        nextId: 1,
      }
    default:
      return state

  }
}
