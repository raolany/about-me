import React from 'react';
import ReactDOM from 'react-dom';
import App from 'core/app';
import { AppContainer } from 'react-hot-loader'

const render = Component => {
  ReactDOM.render(
    <AppContainer>
      <Component />
    </AppContainer>,
    document.getElementById('root'),
  )
}

render(App);

if (module.hot) {
  module.hot.accept('core/app', () => {
    const nextApp = require('core/app').default;
    render(nextApp)
  })
}