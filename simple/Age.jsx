import React, { Component, PropTypes as pt } from 'react';
import connect from './connect';

class Age extends Component {
    handleBlur = () => {
        this.props.dispatch({
            type: 'AGE',
            payload: parseInt(this.age.value, 10)
        });
    };

    render() {
        return <div>
            <input type="text" ref={c => this.age = c}/>
            <button onClick={this.handleBlur}>Save</button>
        </div>
    }
}

export default connect()(Age);