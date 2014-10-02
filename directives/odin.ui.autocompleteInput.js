(function($) {
var odinAutocompleteInput = angular.module('odin.ui.autocompleteInput', []);

odinAutocompleteInput.directive('autocompleteInput', [
function() {
return {
restrict: 'A', // default value is A if it's not set.
require: 'ngModel',
link: function($scope, $element, $attrs, ngModel){
// must implement $render if set ngModel as require
ngModel.$render=function(){
	$element.val(ngModel.$viewValue || '');
};

$element.autocomplete({

	select: function(ev, ui){
		$scope.$apply(function(){
			ngModel.$setViewValue(ui.item.value);
		});
	}
});
},
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