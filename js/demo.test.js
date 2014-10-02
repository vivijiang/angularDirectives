'use strict';

(function($) {
var demoForm = angular.module('demo.test', ['odin.ui']);
demoForm.controller('demoTestController',function($scope, $element){
	$scope.title='node title';
	$scope.objtitle ='obj title';
	$scope.setAppTitle =function(title){
				$scope.title=title;
			};

			$scope.setObjTitle= function(title){
				debugger;
				$scope.objtilte=title;
			};
});

})(jQuery);