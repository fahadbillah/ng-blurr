/**
* ng-blurr Module
*
* Description
*/
angular.module('Blurr', [])
.directive('ngBlurr', ['$timeout', function($timeout){
	// Runs during compile
	return {
		// name: '',
		// priority: 1,
		// terminal: true,
		scope: {
			ngBlurr: '='
		}, // {} = isolate, true = child, false/undefined = no change
		// controller: function($scope, $element, $attrs, $transclude) {},
		// require: 'ngModel', // Array = multiple requires, ? = optional, ^ = check parent elements
		restrict: 'A', // E = Element, A = Attribute, C = Class, M = Comment
		// template: '',
		// templateUrl: '',
		// replace: true,
		// transclude: true,
		// compile: function(tElement, tAttrs, function transclude(function(scope, cloneLinkingFn){ return function linking(scope, elm, attrs){}})),
		link: function($scope, iElm, attrs) {
			if (!$scope.ngBlurr) {
				return false;
			}
			attrs.$set('class', 'pre-swap');
			var currentImg = iElm;
			var img = new Image();
			img.src = $scope.ngBlurr;
			img.onload = function(data) {
				attrs.$set('class', 'swap');
				attrs.$set('src', $scope.ngBlurr);
			};
		}
	};
}]);