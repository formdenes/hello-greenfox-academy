import React from 'react';
import ReduxGoldenAcorn from './containers/ReactApp/index';
import StateGoldenAcornApp from './components/StateGoldenAcornApp';
import Navbar from './components/Navbar'
import {BrowserRouter, Route} from 'react-router-dom';
import {Title} from './components/Title';


const App = (props) => (
  <main>
    <BrowserRouter>
      <Navbar />
      <Route exact path='/' component={Title} />
      <Route path='/simple/redux' component={ReduxGoldenAcorn} />
      <Route path='/simple/states' component={StateGoldenAcornApp} />

    </BrowserRouter>
  </main>
);

export default App;