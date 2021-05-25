import { combineReducers, createStore } from 'redux'
import todoReducer from './reducers/todos'
import quizReducer from './reducers/quiz'

const reducers = combineReducers({
    todo: todoReducer,
    quiz: quizReducer,
})

const store = createStore(reducers)

export default store
