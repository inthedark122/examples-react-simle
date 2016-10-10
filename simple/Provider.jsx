import React, { Component, PropTypes as pt } from 'react';

class Provider extends Component {
    static propTypes = {
        children: pt.oneOfType([pt.element, pt.string]),
        store: pt.object.isRequired
    };

    static childContextTypes = {
        store: pt.object.isRequired
    };

    getChildContext() {
        return {
            store: this.props.store
        };
    }

    render() {
        return <div>
          {this.props.children}
        </div>;
    }
}

export default Provider;
