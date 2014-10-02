'use strict';

(function($) {
var demoForm = angular.module('demo.test', ['odin.ui']);
demoForm.controller('demoTestController',function($scope, $element){
	$scope.title='node title';
	$scope.setAppTitle =function(title){
				$scope.title=title;
			};
});

})(jQuery);