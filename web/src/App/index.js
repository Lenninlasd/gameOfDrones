import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Round from './Rounds';
import Score from './Score';
import Results from './Results';
import Players from './Players';
import Stats from './Stats';

const Layout = ({ level }) => {
  switch (level) {
    case 1:
      return <Players />;
    case 2:
      return (
        <>
          <Round />
          <Score />
        </>
      );
    case 3:
      return <Results />;
  }
};

Layout.propTypes = {
  level: PropTypes.number.isRequired
};

const mapStateToProps = state => ({
  level: state.level
});

const LayoutConnected = connect(mapStateToProps)(Layout);

export const App = () => (
  <Router>
    <div>
      <Route exact path="/" component={LayoutConnected} />
      <Route path="/stats" component={Stats} />
    </div>
  </Router>
);
