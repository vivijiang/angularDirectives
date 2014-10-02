(function($) {
var uitest = angular.module('odin.ui.test', []);

uitest.directive('autocompleteInput', [
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
}
};
}
]);

uitest.directive('scopFalse',[function(){
	return {
		restrict: 'A',
		link: function($scope, $element, $attrs){
			$scope.setDirectiveTitle =function(title){
				$scope.title=title;
			};
		}
	};
}]);
})(jQuery);