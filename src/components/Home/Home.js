import React from 'react';
import PropTypes from 'prop-types';
import UpdatesCard from './UpdatesCard';

const Home = props => {
  return (
    <>
    <div className='gu-container'>
      <div className='gu-col-12 gu-mx-auto gu-centerHor gu-padVer'>
        <h3>EXPLORE THE WORLD FROM HOME WITH</h3>
        <h1>GLOBALIZER</h1>
      </div>
    </div>
    <UpdatesCard />
    </>
  )
}

Home.propTypes = {
  theme: PropTypes.string
}

Home.defaultProps = {
  theme: 'light'
}

export default Home;
