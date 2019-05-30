export default function reducer( state, action ) {
  switch ( action.type ) {
    case 'ADD_TODO':
      const newTask = {
        id: state.nextId,
        text: action.payload,
        done: false,
        fast: false,
        createdAtDate: new Date(),
        doneAtDate: null,
      }
      return {
        todoList: [...state.todoList, newTask],
        nextId: state.nextId + 1,
      }
    case 'REMOVE_TODO':
      return {
        ...state,
        todoList: state.todoList.filter( todo => todo.id !== action.payload )
      }
    case 'CROSS_OUT_TODO':
      return {
        ...state,
        todoList: state.todoList.map(todoItem => (
            action.payload === todoItem.id
              ? { ...todoItem, done: true, doneAtDate: new Date() }
              : todoItem
          ),
        )
      }
    case 'MAKE_FAST':
      return {
        ...state,
        todoList: state.todoList.map(todoItem => (
            action.payload === todoItem.id
              ? { ...todoItem, fast: true }
              : todoItem
          ),
        )
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
