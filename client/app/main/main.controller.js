'use strict';

(function(SmartFox) {

  class MainController {

	constructor(SmartFox, $q) {
		this.SFS = SmartFox;
		this.SFS.sfc.connect();
		this.connection = this.SFS.sfc;
		this.usersInRoom = [];
		this.userName;
		this.players = [];
		this.$q = $q;
	}

	$onInit(){
		var roomPromise = this.$q.when(true);
		var playerPromise = this.$q.when(true);
		var roomJoined = function(){
			roomPromise.then(() => {
				this.userName = this.SFS.sfc.mySelf.name;
				this.usersInRoom = this.SFS.getUsersInRoom();
				this.SFS.getPlayers();
			})
		}
		var playersReturned = function(event){
			playerPromise.then(() => {
				console.log(event);
				this.players = event.params.players;
			})
		}
		var boundRoomJoined = roomJoined.bind(this);
		var boundPlayersReturned = playersReturned.bind(this);
		this.SFS.addEventListener('EXTENSION_RESPONSE', boundPlayersReturned);
		this.SFS.addEventListener('ROOM_JOIN', boundRoomJoined);
	}
	logIn(name) {
		this.SFS.logIn(name);
	}

  }

  angular.module('sfdemoangularApp')
	.component('main', {
	  templateUrl: 'app/main/main.html',
	  controller: MainController
	});
})();
