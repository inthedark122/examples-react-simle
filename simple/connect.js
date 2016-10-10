import React, { Component, PropTypes as pt } from 'react';

const
    connect = (mapStoreToProps = () => {}) => WrappedComponent => {
        class Connect extends Component {
            static contextTypes = {
                store: pt.shape({
                    getState: pt.func.isRequired,
                    dispatch: pt.func.isRequired
                }).isRequired
            };

            state = {
                newProps: mapStoreToProps(this.context.store.getState())
            };

            componentDidMount() {
                this.context.store.subscribe(() => {
                    this.setState({
                        newProps: mapStoreToProps(this.context.store.getState())
                    })
                })
            }

            render() {
                console.log('Store:', this.context.store.getState());

                return <WrappedComponent
                    {...this.props}
                    {...this.state.newProps}
                    dispatch={this.context.store.dispatch}
                />
            }
        }

        return Connect;
    };

export default connect;
