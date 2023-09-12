import reactDOM from 'react-dom'
import logo from './logo.svg';
import './App.css';
import React from 'react';
import { MuiGetDetailsButton } from './components/MuiGetDetailsButton'
import MainContainer from './components/MainContainer'
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Button from '@mui/material/Button'


const theme = createTheme(
  {
    palette: {
      common: {
        white: "#fff"
      },
      primary: {
        main: 'rgb(24,61,61)',
        contrastText: '#fff',
      },
      secondary: {
        main: '#f57f17',
      }, 
      background: {
        default: "#000",
        paper: "rgb(200,200,200,0.6)",
      },
    },

  }
)


function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <header className="App-header">
          
        <MainContainer />
        </header>
      </div>
    </ThemeProvider>
  );
}

export default App;
