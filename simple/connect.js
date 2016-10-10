import React, { Component } from 'react';

const
  connect = () => WrappedComponent => {
    class Connect extends Component {

      render() {
        return <WrappedComponent
            {...this.props}
        />
      }
    }

    return Connect;
  };

export default connect;
