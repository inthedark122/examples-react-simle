import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import createStore from './store';
import reducers from './reducer';
import Provider from './Provider.jsx';
import Table from './Table.jsx';
import Age from './Age.jsx';

const store = createStore(reducers);
window.store = store;
console.log('App store:', store);

class App extends Component {
    render() {
        return <Provider store={store}>
            <Table />
            <Age />
        </Provider>;
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('app')
);