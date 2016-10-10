import React, { Component, PropTypes as pt } from 'react';
import List from './List.jsx';

class Table extends Component {
    render() {
        return <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>City</th>
                    <th>Age</th>
                </tr>
            </thead>

            <tbody>
                <List name="Vasy" />
            </tbody>
        </table>
    }
}

export default Table;
