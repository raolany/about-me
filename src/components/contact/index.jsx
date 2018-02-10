import React from 'react';
import copy from 'copy-to-clipboard';

import './index.scss';

export default class Contact extends React.Component {
  render() {
    const {name, img, value, url} = this.props;

    const imgTag = <img src={img}/>;
    const tip = `${value}<span>Click to copy</span>`
    return (
      <div className="contact" data-tip={tip} onClick={() => {copy(url || value)}}>
        {url ? <a target='blank' href={url}>{imgTag}</a> : imgTag}
        
        {/* <b>{name}</b> */}
        {/* <input value={value} type='text' ref={x => this.value = x}/>
        <div>{value}</div> */}
      </div>
    );
  }
}