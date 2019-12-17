import store from './src/store';
import { Provider } from 'react-redux';
import React from 'react';
import TodoApp from './src/containers/TodoApp';

export default class App extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <TodoApp/>
            </Provider>
        );
    }
};




