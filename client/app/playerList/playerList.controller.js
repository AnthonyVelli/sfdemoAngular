'use strict';

(function() {

  class playerListController {

	constructor() {

	}
	

  }

  angular.module('sfdemoangularApp')
	.component('playerList', {
	  templateUrl: 'app/playerList/playerList.html',
	  controller: playerListController,
	  bindings: {
	  	foundPlayers: '<'
	  }
	});
})();
