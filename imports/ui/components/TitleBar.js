import React, { Component } from 'react';
import PropTypes from 'prop-types';

class TitleBar extends Component {
  constructor( ) {
    super( );
  }

  renderSlogan( ) {
    const { slogan } = this.props;
    if ( slogan ) {
      return <h2 className="title-bar__slogan">{slogan}</h2>;
    }
  }
  render( ) {
    const { title } = this.props;
    return (
      <div className="title-bar">
        <div className="wrapper">
          <h1>
            {title}
          </h1>
          {this.renderSlogan(  )}
        </div>
      </div>
    )
  }
}

TitleBar.propTypes = {
  title: PropTypes.string.isRequired,
  slogan: PropTypes.string
}

TitleBar.defaultProps = {
  title: 'Names are hard'
}

export default TitleBar;