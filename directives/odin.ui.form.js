(function($) {
var odinFormDirectives = angular.module('odin.ui.form', []);

odinFormDirectives.directive('ajaxForm', ['$http',
function($http) {
return {
restrict: 'A',
controller: function($scope, $element, $attrs) {

	var getSubmitData = $scope[$attrs['submitData']];
	var formCallbacks = $scope[$attrs['formCallback']];

	$scope.ajaxSubmit=function($event){

	$event.preventDefault();
		var formData = getSubmitData();

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