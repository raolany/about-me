import React from 'react';
import Rate from 'rc-rate';

import 'rc-rate/assets/index.css';
import './index.scss';

export default class Skill extends React.Component {
  render() {
    const {name, img, mark} = this.props;
    return (
      <div className="skill">
        <img src={img}/>
        <b>{name}</b>
        <Rate count={5} value={mark} allowHalf={true} onHoverChange={() => {}}/>
      </div>
    );
  }
}