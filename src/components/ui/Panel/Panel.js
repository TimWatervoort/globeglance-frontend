import React from 'react';
import PropTypes from 'prop-types';
import './Panel.scss';

const Panel = props => {
  const { theme, title, children, content, className } = props;

  return (
    <div className={` gu-panel gu-panel-${theme} ${className}`}>
      { title &&
      <div className={`gu-panel-header gu-panel-header-${theme}`}>
        <h3>{ title }</h3>
      </div>
      }
      { content &&
      <div className={`gu-panel-body${title ? '-with-header' : '' }`}>
        <p>{ content }</p>
      </div>
      }
      { children }

    </div>
  )
}

Panel.propTypes = {
  theme: PropTypes.string,
  title: PropTypes.string,
  content: PropTypes.string
}

Panel.defaultProps = {
  theme: 'light',
  title: '',
  content: ''
}

export default Panel;
