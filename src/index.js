import React from 'react';
import ReactDOM from 'react-dom';


import { BrowserRouter, Switch } from 'react-router-dom';

import RouteApp from './components/App';


import './index.css';
import Year2023 from './components/Year2023';
import Year2024 from './components/Year2024';
import Home from './components/Home';
import ContactUs from './components/ContactUs';



ReactDOM.render(
  
    <BrowserRouter>
      <Switch>
        <RouteApp path={'/contactUs'} component={ContactUs} />
        <RouteApp path={'/year2023'} component={Year2023} />
        <RouteApp path={'/year2024'} component={Year2024} />
        <RouteApp path={'/'} component={Home} />  
      </Switch>
    </BrowserRouter>,
  
  document.getElementById('root')
);
