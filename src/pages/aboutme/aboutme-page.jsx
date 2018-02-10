import React from 'react';
import Skill from 'components/skill';
import Contact from 'components/contact';
import {Skills, Contacts} from 'constants';

import './aboutme-page.scss';

export default class AboutMePage extends React.Component {
  render() {
    return (
      <div className="about-me">
        <div className="section-info">
          <div className="avatar"></div>
          <div className="title">
            <b>Andrii Rak</b>
            <span>Fullstack .NET developer</span>
            <div>
              <span>Ukraine, Kyiv</span>
            </div>
          </div>
          <div className="contacts">
            {Contacts.map((x, i) => {
              return <Contact key={i} name={x.name} value={x.value} img={x.img} url={x.url}/>
            })}
          </div>
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