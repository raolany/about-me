import React from 'react';
import Skill from 'components/skill';
import {Skills} from 'constants';

import './aboutme-page.scss';

export default class AboutMePage extends React.Component {
  render() {
    return (
      <div className="about-me">
        <div className="section-info">
          <b>Andrii Rak</b>
          <span>Fullstack .NET developer</span>
        </div>
        <div className="section-skills">
          <div>
            <b>Frontend:</b>
            {Skills.front.map((x, i) => {
              return <Skill key={i} name={x.name} img={x.img} mark={x.mark}/>
            })}
          </div>
          <div>
            <b>Backend:</b>
            {Skills.back.map((x, i) => {
              return <Skill key={i} name={x.name} img={x.img} mark={x.mark}/>
            })}
          </div>
        </div>
      </div>
    );
  }
}