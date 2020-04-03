import React from 'react'
import { connect } from 'react-redux'
import { updateStore } from '../action/updateAction'

let Button = ({ updated, saySomething }) => (
    <div>
        <button onClick={saySomething}
            type="button">
            Add to favorites
        >
    </button>
        <p>{updated}</p>
    </div>
)

const mapStateToProps = (state) => ({
    updated: state.text,
})
const mapDispatchToProps = (dispatch) => ({
    saySomething: () => { dispatch(updateStore()) }
})
Button = connect(
    mapStateToProps,
    mapDispatchToProps
)(Button)

export default Button;
