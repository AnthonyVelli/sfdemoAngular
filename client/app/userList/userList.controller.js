'use strict';

(function() {

  class userListController {

	constructor() {

	}
	

  }

  angular.module('sfdemoangularApp')
	.component('userList', {
	  templateUrl: 'app/userList/userList.html',
	  controller: userListController,
	  bindings: {
	  	foundUsers: '<'
	  }
	});
})();
