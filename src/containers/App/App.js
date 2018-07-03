import React from 'react';

import Grid from 'react-bootstrap/lib/Grid';

import Header from 'components/Header';

class App extends React.Component {
  render() {
    return (
      <div className="container">
        <Header />
        <Grid>{this.props.children}</Grid>
      </div>
    );
  }
}

export default App;
