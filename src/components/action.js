import React from 'react';

export default class Action extends React.Component {

    render() {
        return (
            <div>
                <button onClick={this.props.saySomething}
                    type="button">
                    Add to favorites
                </button>
            </div>
        )
    }
}
