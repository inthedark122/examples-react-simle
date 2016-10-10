import React, { Component, PropTypes as pt } from 'react';

class Provider extends Component {
    static propTypes = {
        children: pt.oneOfType([pt.element, pt.string])
    };

    render() {
        return <div>
          {this.props.children}
        </div>;
    }
}

export default Provider;
