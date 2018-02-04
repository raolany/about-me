import React from 'react';
import Skill from 'components/skill';
import {Skills} from 'constants';

export default class AboutMePage extends React.Component {
  render() {
    return (
      <div>
        <div className="section-skills">
          {Skills.map((x, i) => {
            return <Skill key={i} name={x.name} img={x.img}/>
          })}
        </div>
      </div>
    );
  }
}