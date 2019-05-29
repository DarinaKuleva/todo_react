export default function reducer( state, action ) {
  switch ( action.type ) {
    case 'ADD_TODO':
      return {
        todoList: [...state.todoList, action.payload],
        nextId: state.nextId + 1,
      }
    case 'REMOVE_TODO' || 'FILTER_DONE' || 'FILTER_FAST':
      return {
        todoList: action.payload,
        nextId: state.nextId,
      }
    case 'CROSS_OUT_TODO' || 'MAKE_FAST':
      return {
        todoList: action.payload,
        nextId: state.nextId,
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
