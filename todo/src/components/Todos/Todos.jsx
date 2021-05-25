import React from 'react'
import { connect } from 'react-redux'
import classes from '../../app.module.css'
import TodoItem from './Todo/TodoItem'
import Form from './Form/Form'

const Todos = (props) => {
    const checkHandler = (e) => {
        props.updateCheckbox(e.target.id, e.target.checked)
    }

    const deleteHandler = (id) => {
        props.deleteTodo(id)
    }

    return (
        <>
            <div className={classes.header}>
                <h1>ToDo</h1>
            </div>
            <div className={classes.todos}>
                {props.todos.length !== 0 ? (
                    props.todos.map((todo) => (
                        <TodoItem
                            key={todo.id}
                            id={todo.id}
                            text={todo.text}
                            completed={todo.completed}
                            checkHandler={checkHandler}
                            deleteHandler={deleteHandler}
                            saveTodo={props.saveTodo}
                        />
                    ))
                ) : (
                    <p>No todos</p>
                )}
                <Form />
            </div>
        </>
    )
}

function mapStateToProps(state) {
    return {
        todos: state.todo.todos,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        deleteTodo: (id) =>
            dispatch({
                type: 'DELETE_TODO',
                id: id,
            }),
        updateCheckbox: (id, checked) =>
            dispatch({
                type: 'UPDATE_CHECKBOX',
                payload: {
                    id: id,
                    completed: checked,
                },
            }),
        saveTodo: (id, text) =>
            dispatch({
                type: 'CHANGE_TODO',
                payload: {
                    id: id,
                    text: text,
                },
            }),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Todos)
