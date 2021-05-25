const initialState = {
    quiz: [
        { id: 1, text: '1 asdasd', completed: false },
        { id: 2, text: '2 asdasd', completed: false },
        { id: 3, text: '3 asdasd', completed: true },
    ],
}

const quizReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_QUIZ':
            const newQuiz = {
                id: action.payload.id,
                text: action.payload.text,
                completed: action.payload.completed,
            }
            return {
                quiz: [...state.quiz, newQuiz],
            }
        default:
            return state
    }
}

export default quizReducer
