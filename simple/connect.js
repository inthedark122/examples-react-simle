import React, { Component, PropTypes as pt } from 'react';

const
    connect = (mapStoreToProps) => WrappedComponent => {
        class Connect extends Component {
            static contextTypes = {
                store: pt.shape({
                    getState: pt.func.isRequired
                }).isRequired
            };

            state = {
                newProps: mapStoreToProps(this.context.store.getState())
            };

            render() {
                console.log('Store:', this.context.store.getState());

                return <WrappedComponent
                    {...this.props}
                    {...this.state.newProps}
                />
            }
        }

        return Connect;
    };

export default connect;
