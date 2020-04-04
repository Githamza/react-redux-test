import React from 'react'
import { connect } from 'react-redux'
import { updateStore } from '../action/updateAction'
import Reaction from '../components/reaction'
import Button from '../components/action'

let UpdateComp = ({ updated, saySomething }) => (
    <div>
        <Button saySomething={saySomething} />
        <Reaction updated={updated} />
    </div>

)

const mapStateToProps = (state) => ({
    updated: state.text,
})
const mapDispatchToProps = (dispatch) => ({
    saySomething: () => { dispatch(updateStore()) }
})
UpdateComp = connect(
    mapStateToProps,
    mapDispatchToProps
)(UpdateComp)

export default UpdateComp;
