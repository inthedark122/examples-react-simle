import React, { Component, PropTypes as pt } from 'react';
import connect from './connect';

const
    mapStoreToProps = (store) => ({
        age: store.age
    }),
    wrapper = connect(mapStoreToProps);

class List extends Component {
    render() {
        const { name, country, age } = this.props;

        return <tr>
            <td>{name}</td>
            <td>{country}</td>
            <td>{age}</td>
        </tr>
    }
}

List.propTypes = {
    name: pt.string,
    country: pt.string,
    age: pt.number
};

console.log(wrapper);
export default wrapper(List);
