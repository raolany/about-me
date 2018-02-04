import React from 'react';

import './index.scss';

export default class Skill extends React.Component {
  render() {
    const {name, img} = this.props;
    return (
      <div className="skill">
        <img src={img}/>
        <b>{name}</b>
      </div>
    );
  }
}