import React from 'react';
import moment from 'moment';

import './index.scss';

export default class Footer extends React.Component {
  render() {
    return (
      <div className="footer">
        <div>
          <div className="contacts">
            <b>Contacts</b>
            <div>andrii.rack@gmail.com</div>
            <div>+38 (095) 931-22-46</div>
          </div>
          <div className='copy'>
            <b>All rights reserved. Designed by Andrii Rak.</b>
            <span>&copy; Copyright 2017 - {moment().format('YYYY')}</span>
          </div>
        </div>
      </div>
    );
  }
}