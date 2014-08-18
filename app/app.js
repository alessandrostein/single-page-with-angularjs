angular.module('appSinglePage', ['ngRoute']);

angular.module('appSinglePage').config(function($routeProvider){
	$routeProvider.when('/', {
		templateUrl: 'app/views/home.html',
		controller : 'HomeCtrl',
	}).when('/sobre', {
		templateUrl: 'app/views/sobre.html',
		controller : 'SobreCtrl',
	}).when('/contato', {
		templateUrl: 'app/views/contato.html',
		controller : 'ContatoCtrl',
	}).otherwise ({redirectTo: '/'});
});
