import './App.css';
import Movies from './components/movies';
import React from 'react';

class App extends React.Component {

  render() {
    return (
      <React.Fragment>
        <main className="container m-2">
          <Movies />
        </main>
      </React.Fragment>
    );
  }
}

export default App;
