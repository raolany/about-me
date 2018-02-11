import React from 'react';
import Routes from 'core/routes';
import ReactTooltip from 'react-tooltip';
import Footer from 'components/footer';

import '../styles/main.scss';

class App extends React.Component {
  render() {
    return (
      <div>
        <Routes />
        <ReactTooltip type='info' effect='solid' 
          delayShow={100} html={true} 
          className="tooltip" multiline={true}/>
        <Footer />
      </div>
    );
  }
}

export default App;