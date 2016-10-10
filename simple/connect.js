import React, {Component} from 'react';

const
    connect = (mapStoreToProps) => WrappedComponent => {
        class Connect extends Component {

            render() {
                const
                    { store } = this.props,
                    newProps = mapStoreToProps(store);

                console.log('Store:', store);

                return <WrappedComponent
                    {...this.props}
                    {...newProps}
                />
            }
        }

        return Connect;
    };

export default connect;
