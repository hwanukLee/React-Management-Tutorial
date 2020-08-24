import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  typography: {
    fontFamily: '"Noto Sans KR",serif',
  }
})

ReactDOM.render(
  <React.StrictMode> <MuiThemeProvider theme={theme}> <App /> </MuiThemeProvider> </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();
