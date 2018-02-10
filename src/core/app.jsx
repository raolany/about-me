import React from 'react';
import Routes from 'core/routes';
import ReactTooltip from 'react-tooltip';
import '../styles/main.scss';

class App extends React.Component {
  render() {
    return (
      <div>
        <Routes />
        <ReactTooltip place='bottom' type='info' effect='solid' 
          delayShow={100} html={true} 
          className="tooltip" multiline={true}/>
      </div>
    );
  }
}

export default App;