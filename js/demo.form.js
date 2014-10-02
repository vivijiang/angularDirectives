'use strict';

(function($) {
var demoForm = angular.module('demo.form.js', ['odin.ui']);
demoForm.controller('demoFormController',function($scope, $element){
	$scope.odindemo='odindemo';
	$scope.businessUnit = 'businessUnit default value';
	$scope.formCallBack ={
		success:function(){
		alert('this is a callback function');
	},
	error:function(){

	},
	done:function(){}
	}; 
	$scope.formData=function(){
		console.log('submit');
		return {
			businessUnit: $scope.businessUnit + '_for submit'
		};
	};

});

})(jQuery);