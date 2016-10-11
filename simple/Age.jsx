import React, { Component, PropTypes as pt } from 'react';
import { connect } from 'react-redux';
import { setAge } from './actions';
import { bindActionCreators } from 'redux';


class Age extends Component {
    handleBlur = () => {
        this.props.setAge(this.age.value);
    };

    render() {
        return <div>
            <input type="text" ref={c => this.age = c}/>
            <button onClick={this.handleBlur}>Save</button>
        </div>
    }
}

export default connect(
    null,
    (dispatch) => ({
        setAge: bindActionCreators(setAge, dispatch)
    })
)(Age);