<<<<<<< HEAD
app.controller('HomeCtrl', function($rootScope, $location){
	$rootScope.activetab = $location.path();
});

app.controller('SobreCtrl', function($rootScope, $location){
	$rootScope.activetab = $location.path();
});

app.controller('ContatoCtrl', function($rootScope, $location){
	$rootScope.activetab = $location.path();
=======
angular.module('appSinglePage').controller('HomeCtrl', function($scope, $rootScope){
	$rootScope.activetab = "/";
});

angular.module('appSinglePage').controller('SobreCtrl', function($scope, $rootScope){
	$rootScope.activetab = "/sobre";
});

angular.module('appSinglePage').controller('ContatoCtrl', function($scope, $rootScope){
	$rootScope.activetab = "/contato";
>>>>>>> master
});

