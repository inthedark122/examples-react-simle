import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import createStore from './store';
import Provider from './Provider.jsx';
import Table from './Table.jsx';

class App extends Component {
    render() {
        return <Provider>
            <Table />
        </Provider>;
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('app')
);