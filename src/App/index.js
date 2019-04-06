import React from 'react';
import { connect } from 'react-redux';

import Round from '../Rounds';
import Score from '../Score';
import { Results } from '../Results';
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

const mapStateToProps = state => ({
  level: state.level
});

export default connect(mapStateToProps)(App);
