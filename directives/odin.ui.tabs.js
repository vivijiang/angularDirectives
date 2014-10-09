(function($) {
var odinTabsDirective = angular.module('odin.ui.tabs', []);

odinTabsDirective.directive('odinAjaxtabs', ['$http',
function($http) {
return {
restrict: 'A',
controller: function($scope, $element, $attrs) {


}
};
}
]);
})(jQuery);