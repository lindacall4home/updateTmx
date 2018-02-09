import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions';

import Header  from './Header';
import OpenTmx from './OpenTmx';
const Search = () => <h2>Search</h2>
const DisplayString = () => <h2>Display String</h2>
const EditTranslations = () => <h2>Edit Translations</h2>

class App extends Component {
  // componentDidMount() {
  //   this.props.readFile();
  // }
  render() {
    return(
      <div className="container">
        <BrowserRouter>
          <div>
            <Header />
            <Route exact path="/" component={ OpenTmx }/>
            <Route path="/search" component={ Search }/>
            <Route path="/display" component={ DisplayString }/>
            <Route path="/edit" component={ EditTranslations }/>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default connect(null, actions)(App);
