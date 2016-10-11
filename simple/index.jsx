import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import reducers from './reducer';
import { Provider } from 'react-redux';
import Table from './Table.jsx';
import Age from './Age.jsx';

const store = createStore(reducers);
window.store = store;
console.log('App store:', store);

class App extends Component {
    render() {
        return <Provider store={store}>
            <div>
                <Table />
                <Age />
            </div>
        </Provider>;
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('app')
);