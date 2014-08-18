angular.module('appSinglePage').controller('HomeCtrl', function($scope, $rootScope){
	$rootScope.activetab = "/";
});

angular.module('appSinglePage').controller('SobreCtrl', function($scope, $rootScope){
	$rootScope.activetab = "/sobre";
});

angular.module('appSinglePage').controller('ContatoCtrl', function($scope, $rootScope){
	$rootScope.activetab = "/contato";
});

