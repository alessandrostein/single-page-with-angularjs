var app = angular.module('app', ['ngRoute']);	

app.config(function($routeProvider, $localtionProvider){
	$localtionProvider.html5Mode(true);

	$routeProvider

	.when('/', {
		templateUrl: 'app/views/home.html',
		controller : 'HomeCtrl',
	})

	.when('/sobre', {
		templateUrl: 'app/views/sobre.html',
		controller : 'SobreCtrl',
	})

	.when('/contato', {
		templateUrl: 'app/views/contato.html',
		controller : 'ContatoCtrl',
	})

	.otherwise ({redirectTo: '/'})/
});
}