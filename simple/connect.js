import React, {Component} from 'react';

const
    connect = (mapStoreToProps) => WrappedComponent => {
        class Connect extends Component {

            render() {
                const
                    newProps = mapStoreToProps();

                return <WrappedComponent
                    {...this.props}
                    {...newProps}
                />
            }
        }

        return Connect;
    };

export default connect;
