import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import createStore from './store';
import Provider from './Provider.jsx';

class App extends Component {
    render() {
        return <Provider>
            Hello
        </Provider>;
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('app')
)