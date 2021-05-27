import './App.css';
import './Components/Alice/Alice.css'
import './Components/Andre/Andre.css'
import './Components/Dani/Dani.css'
import './Components/Home/HomePage.css'
import './Components/Karina/Karina.css'
import './Components/Lili/Lili.css'
import './Components/Mariliz/Mariliz.css'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  // Link
} from "react-router-dom";

import Alice from './Components/Alice/Alice';
import Andre from './Components/Andre/Andre';
import Dani from './Components/Dani/Dani';
import HomePage from './Components/Home/HomePage';
import Karina from './Components/Karina/Karina'
import Lili from './Components/Lili/Lili';
import Mariliz from './Components/Mariliz/Mariliz';
import ExampleTabla from './Components/Alice/ExampleTabla';

function App() {
  return (
    <div className="App">

      <Router>
        <Switch>
          <Route path='/Alice'>
            <Alice />
            <ExampleTabla/>
          </Route>
          <Route path='/Andre'>
            <Andre />
          </Route>
          <Route path='/Dani'>
            <Dani />
          </Route>
          <Route path='/' exact>
            <HomePage />
          </Route>
          <Route path='/Karina'>
            <Karina />
          </Route>
          <Route path='/Lili'>
            <Lili />
          </Route>
          <Route path='/Mariliz'>
            <Mariliz />
          </Route>
          
        </Switch>
      </Router>
      
    </div>
  );
}

export default App;
