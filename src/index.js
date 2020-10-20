import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import 'semantic-ui-css/semantic.min.css'
import './index.css'
import { TravelShots } from './TravelShots'

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <TravelShots />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
