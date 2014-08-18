angular.module('appSinglePage').controller('HomeCtrl', function($scope){
	$scope.activetab = "/";
});

angular.module('appSinglePage').controller('SobreCtrl', function($scope){
	$scope.activetab = "/sobre";
});

angular.module('appSinglePage').controller('ContatoCtrl', function($scope){
	$scope.activetab = "/contato";
});

