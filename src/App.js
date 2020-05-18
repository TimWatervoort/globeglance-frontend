import React from 'react';
import PropTypes from 'prop-types';
import 'components/ui/style.scss';
// import TempComponent from 'components/TempComponent';
import Navbar from 'components/ui/Navbar';
import { connect } from 'react-redux';
import { selectTheme } from 'state/preferences/selectors';
import { Route, Switch } from 'react-router-dom';
import Home from 'components/Home';

const App = props => {
  const { theme } = props;

  return (
    <div className="App">
      <Navbar theme={ theme } />
      <Switch>
        <Route exact path='/' component={Home} />
      </Switch>
    </div>
  );
}

const mapStateToProps = state => ({
  theme: selectTheme(state)
});

App.propTypes = {
  theme: PropTypes.string
}

App.defaultProps = {
  theme: 'light'
}

export default connect(mapStateToProps)(App);
