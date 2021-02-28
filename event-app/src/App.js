import React from 'react';
import { Container } from 'semantic-ui-react';
import "./App.css"
import Navigation from './atoms/NavBar/Navigation.js';
import Dashboard from "./Events/EventDashboard/Dashboard.js"

function App() {
  return (
    <div>
      <Navigation />
      <Container className="main">
        <Dashboard />
      </Container>
    </div>
  );
}

export default App;

