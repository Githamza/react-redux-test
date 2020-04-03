const updateAction = (state = [], action) => {
    switch (action.type) {
        case 'UPDATE_STORE':
            console.log(state)
            return {
                ...state,

                text: 'Button clicked'

            }
        default:
            return state
    }
}

export default updateAction