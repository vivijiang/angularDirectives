'use strict';

(function($) {
var demoForm = angular.module('demo.test', ['odin.ui']);
demoForm.controller('demoTestController',function($scope, $element){
	$scope.title='node title';

});

})(jQuery);