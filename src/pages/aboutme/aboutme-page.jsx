import React from 'react';
import Skill from 'components/skill';
import Contact from 'components/contact';
import TimelineComponent from 'components/timeline';
import {Skills, Contacts, TimeLine} from 'constants';

import './aboutme-page.scss';

export default class AboutMePage extends React.Component {
  render() {
    return (
      <div className="about-me">
        <div className="info">
          <div>
            <div className="avatar"></div>
            <div className="info">
              <div className="title">
                <b>Andrii Rak</b>
                <span>Fullstack .NET Developer</span>
                <label>Ukraine, Kyiv</label>
              </div>
              <div className="contacts">
                {Contacts.map((x, i) => {
                  return <Contact key={i} name={x.name} value={x.value} img={x.img} url={x.url}/>
                })}
              </div>
            </div>
          </div>
          <div className='summary'>
            <p>
              I`m Fullstack .Net Developer with more than 2 years of experience. Experienced in all stages of the development cycle for web projects.
              Well-versed in numerous programmng languages including C#, JavaScript and SQL.
              Interest in architecture, OOP, Refactoring, “the perfect code” and effective development
              methods. Constant search for answers to the question “how else can I exert myself and
              improve the quality of my work?”
            </p>
          </div>
        </div>
        <div className="skills">
          <h2>Frontend</h2>
          <div>
            {Skills.front.map((x, i) => {
              return <Skill key={i} name={x.name} img={x.img} mark={x.mark}/>
            })}
          </div>
          <h2>Backend</h2>
          <div>
            {Skills.back.map((x, i) => {
              return <Skill key={i} name={x.name} img={x.img} mark={x.mark}/>
            })}
          </div>
        </div>
        <div className="timeline-section">
          <h2>Time line</h2>
          <TimelineComponent timeline={TimeLine}/>
        </div>
      </div>
    );
  }
}