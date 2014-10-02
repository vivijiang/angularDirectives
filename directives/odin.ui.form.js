(function($) {
var odinFormDirectives = angular.module('odin.ui.form', []);

odinFormDirectives.directive('ajaxForm', ['$http',
function($http) {
return {
restrict: 'A',

controller: function($scope, $element, $attrs) {

	var formDataFunction = $scope[$attrs['formData']];
	var formCallbacks = $scope[$attrs['formCallback']];

	$scope.ajaxSubmit=function($event){

$event.preventDefault();
		var formData = formDataFunction();

		var action= $element.attr('action');
		console.log('submit action:' +action)
		//todo : ajax submit
		formCallbacks.success();

	};
}
};
}
]);
})(jQuery);