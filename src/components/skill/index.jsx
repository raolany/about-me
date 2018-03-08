//@flow
import React, { Component } from 'react';
import Rate from 'rc-rate';

import 'rc-rate/assets/index.css';
import './index.scss';

type SkillType = {
  name: string,
  img: string,
  mark: number
}

export default class Skill extends Component<SkillType, void> {
  render() {
    const { name, img, mark } = this.props;
    return (
      <div className="skill">
        <img src={img} />
        <b>{name}</b>
        <Rate count={5} value={mark} allowHalf={true} />
        <div></div>
      </div>
    );
  }
}