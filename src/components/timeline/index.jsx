import React from 'react';
import momemnt from 'moment';

import './index.scss';

export default class TimelineComponent extends React.Component {
  render() {
    const {timeline} = this.props;
    return (
      <div className="timeline">
        {timeline.reverse().map((x, i) => {
          return <div key={i}>
            <div>
              <span>{`${momemnt(x.from).format('MMM YYYY')} - ${momemnt(x.to).format('MMM YYYY')}`}</span>
            </div>
            <b>{x.title}</b>
            <p>{x.description}</p>
          </div>
        })}
        <span>Start</span>
      </div>
    );
  }
}