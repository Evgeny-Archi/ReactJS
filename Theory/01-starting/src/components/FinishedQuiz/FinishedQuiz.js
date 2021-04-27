import React from "react"
import classes from './FinishedQuiz.module.css'
import Button from '../UI/Button/Button'

function FinishedQuiz(props) {
    const successCount = Object.keys(props.results).reduce((acc, curr) => {
        if (props.results[curr] === 'success') {
            acc++
        }
        return acc
    }, 0)

    return (
        <div className={classes.FinishedQuiz}>
            <ul>
                {props.quiz.map((quizItem, index) =>{
                    return (
                        <li key={index}>
                            <strong>{quizItem.id}. </strong>{quizItem.question}
                            {props.results[quizItem.id] === 'error'
                                ? <span className={`${classes.icon} ${classes.error}`}>&times;</span>
                                : <span className={`${classes.icon} ${classes.success}`}>&#10003;</span>}
                        </li>
                    )
                })}
            </ul>

            <p>Правильно: {successCount} из {props.quiz.length}</p>

            <div>
                <Button
                    type='primary'
                    disabled={false}
                    onClick={props.onRetry}
                >Повторить</Button>
                <Button
                    type='success'
                    disabled={false}
                >Перейти к списку</Button>
            </div>
        </div>
    )
}

export default FinishedQuiz