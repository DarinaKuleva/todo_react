export default function reducer( state, action ) {
  switch ( action.type ) {
    case 'ADD_TODO':
      return {
        todoList: [...state.todoList, action.payload],
        nextId: state.nextId+1
      }
    case 'REMOVE_TODO':
      return {
        todoList: action.payload,
        nextId: state.nextId
      }
    case 'CLEAR_ALL':
      return {
        todoList: [],
        nextId: 1
      }
    case 'CROSS_OUT_TODO':
      return {
        todoList: action.payload,
        nextId: state.nextId
      }
    default:
      return state

  }
}
