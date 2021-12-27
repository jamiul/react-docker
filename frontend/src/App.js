import './App.css';
import NavBar from './components/navbar';
import Counters from './components/counters';
import React from 'react';

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <NavBar />
        <main className="container">
          <Counters />
        </main>
      </React.Fragment>
    );
  }
}

export default App;
