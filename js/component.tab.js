'use strict';

(function($) {
        var demoTabs = angular.module('demo.tabs', ['odin.ui']);
        demoTabs.controller('demoTabsController', function($scope, $element) {
                $scope.title = 'Tabs Demo';

            );

        })(jQuery);

    (function($) {
        var odinapp = angular.module('odinapp', [
            'demo.tabs'
        ]);
    })(jQuery);
