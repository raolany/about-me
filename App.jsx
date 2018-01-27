import React from 'react';
import ReactDom from 'react-dom';

import './src/styles/main.scss';

export default class App extends React.Component {
    render() {
        return 'Hello';
    }
}

ReactDom.render(<App />, document.getElementById('root'));