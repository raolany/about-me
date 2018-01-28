import React from 'react';
import ReactDom from 'react-dom';
import Routes from 'core/routes';

import './src/styles/main.scss';

class App extends React.Component {
    render() {
        return (
            <Routes />
        );
    }
}

ReactDom.render(<App />, document.getElementById('root'));