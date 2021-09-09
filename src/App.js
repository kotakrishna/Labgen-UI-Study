import './App.css';
import { ThemeProvider } from '@material-ui/core/styles';
import Header from "./components/header/index"
import React from 'react';
// import darkTheme from './theme';
import { createTheme, Paper } from "@material-ui/core";
import {Switch,Route} from "react-router-dom"
import {
    blueGrey,
    lightBlue,
    deepPurple,
    deepOrange
  } from "@material-ui/core/colors";
import AddNewRecord from './Froms/ClientDictionary/AddNewRecord';


function App() {
  
  const [darkState, setDarkState] = React.useState(false);
  
  const palletType = darkState ? "dark" : "light";
  const mainPrimaryColor = darkState ? blueGrey[500] : lightBlue[500];
  const mainSecondaryColor = darkState ? deepOrange[900] : deepPurple[500];
  const darkTheme = createTheme({
    palette: {
      type: palletType,
      primary: {
        main: mainPrimaryColor
      },
      secondary: {
        main: mainSecondaryColor
      }
    }
  });

  function toggleDarkState() {

    setDarkState(!darkState);
  }

  return (
    <ThemeProvider theme={darkTheme}>
        <Header darkState={darkState} toggleDarkState={toggleDarkState} />
        {/* <LeftSlide /> */}
      <div className="App">
      <Paper elevation={0} >

       <Switch>
         <Route exact path="/" >
           New Screen
         </Route>
         <Route  path="/client-dictionary" component={AddNewRecord} />
       </Switch>
      </Paper>
      </div>
    </ThemeProvider>
  );
}


export default App;
