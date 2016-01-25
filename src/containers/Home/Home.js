import React, { Component } from 'react';
import Helmet from 'react-helmet';

export default class Home extends Component {
  render() {
    return (
      <div className="container-fluid">
        <Helmet title="Home"/>
        <p>A list of things that aren't Gothic Architecture:</p>
        <p>(there's nothing)</p>
      </div>
    );
  }
}
