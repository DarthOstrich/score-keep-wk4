import React, { Component } from 'react';
import Player from './Player';
import PropTypes from 'prop-types';
import FlipMove from 'react-flip-move';

class PlayerList extends Component {

  renderPlayers( ) {
    const { players } = this.props;
    if ( players.length === 0 ) {
      return (
        <div className="item">
          <p className="item__message">Please add players.</p>
        </div>


      )
    } else {
      return players.map(player => {
        return <Player key={player._id} player={player}/>;
      });
    }

  }
  render( ) {
    return (
      <div>
        <FlipMove maintainContainerHeight={true}>
          {this.renderPlayers( )}
        </FlipMove>
      </div>
    );
  }
};

PlayerList.propTypes = {
  players: PropTypes.array.isRequired
}

export default PlayerList;
