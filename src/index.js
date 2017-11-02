import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

const MuiThemedApp = () => (
  <MuiThemeProvider>
    <App />
  </MuiThemeProvider>
);

ReactDOM.render(<MuiThemedApp />, document.getElementById('root'));
