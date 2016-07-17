(function(angular, undefined) {
  angular.module("sfdemoangularApp.constants", [])

.constant("appConfig", {
	"userRoles": [
		"guest",
		"user",
		"admin"
	]
})

;
})(angular);