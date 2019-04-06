import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Round from '../Rounds';
import Score from '../Score';
import Results from '../Results';
import Players from '../Players';

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

const App = ({ level }) => (
  <div>
    <Layout level={level} />
  </div>
);

const levelProp = {
  level: PropTypes.number.isRequired
};
Layout.propTypes = levelProp;
App.propTypes = levelProp;

const mapStateToProps = state => ({
  level: state.level
});

export default connect(mapStateToProps)(App);
