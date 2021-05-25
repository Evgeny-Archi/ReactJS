const initialState = { todos: [] }

const todoReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'UPDATE_TODO':
            return {
                todos: [...state.todos, action.todosFromBase],
            }
        case 'ADD_TODO':
            const newTodo = {
                id: action.payload.id,
                text: action.payload.text,
                completed: action.payload.completed,
            }
            return {
                todos: [...state.todos, newTodo],
            }
        case 'DELETE_TODO':
            return {
                todos: state.todos.filter((todo) => todo.id !== action.id),
            }
        case 'UPDATE_CHECKBOX':
            const newTodos = state.todos.map((item) => {
                if (item.id === +action.payload.id) {
                    item.completed = action.payload.completed
                }
                return item
            })
            return {
                todos: newTodos,
            }
        case 'CHANGE_TODO':
            const newTodosUpdated = state.todos.map((item) => {
                if (item.id === +action.payload.id) {
                    item.text = action.payload.text
                }
                return item
            })
            return {
                todos: newTodosUpdated,
            }
        default:
            return state
    }
}

export default todoReducer
