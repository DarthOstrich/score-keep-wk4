import React from 'react';
import ReactDOM from 'react-dom';
import { Meteor } from 'meteor/meteor';
import { Players, calculatePlayerPositions } from './../imports/api/players';
import { Tracker } from 'meteor/tracker';
// import AddPlayer from '../imports/ui/components/AddPlayer';
// import TitleBar from '../imports/ui/components/TitleBar';
// import Player from './../imports/ui/components/Player';
// import PlayerList from './../imports/ui/components/PlayerList';
import App from './../imports/ui/components/App'

Meteor.startup(() => {

  Tracker.autorun(() => {
    const players = Players.find({}, { sort: {score: -1}} ).fetch();
    const positionedPlayers = calculatePlayerPositions(players);
    let title = 'Score Keep';
    const slogan = 'One Contest at a time';

    ReactDOM.render(<App title={title} players={positionedPlayers} slogan={slogan} />, document.getElementById('app'));
  });

});