import React from 'react';
import {EventableComponent, AppEvents} from 'react-at-rest';
import logo from './logo.svg';
import './App.css';
// EventableComponent provides event handling methods such as @listenTo and @stopListening
class App extends EventableComponent {

  componentDidMount() {
    // set up some global error handling
    this.listenTo(AppEvents, 'api.exception', (error) => {
      console.error(error);
    });
  }

  render() {
    return (
        <div className="App">
          <div className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h2>Welcome to React</h2>
          </div>
          <p className="App-intro">
            To get started, edit <code>src/index/index_app.jsx</code> and save to reload.
          </p>
        </div>
    );
  }

}

module.exports = App;
