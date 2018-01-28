import React from 'react';
import {BrowserRouter, Redirect} from 'react-router-dom';
import * as Pages from 'pages';
import BaseRoute from './base-route';

const production = false;

export default class Routes extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <BaseRoute exact path='/' component={production ? Pages.UnavailablePage : Pages.AboutMePage}/>
          <BaseRoute path='/' component={() => {
            return <Redirect to='/'/>
          }}/>
        </div>
      </BrowserRouter>
    );
  }
}