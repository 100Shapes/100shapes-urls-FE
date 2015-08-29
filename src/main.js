// Libs
const angular = require('angular');
require('angular-ui-router');
require('angular-sanitize');
require('angular-animate');
require('polyfill-function-prototype-bind');

// Styles
require('css/main.less');


var ngModule = angular.module('app', [
    'ui.router',
    'ngSanitize',
    'ngAnimate'
]);

require('./config')(ngModule);
require('./run')(ngModule);
require('./common')(ngModule);
require('./states')(ngModule);
require('./constants')(ngModule);

angular.element(document).ready(function() {
    angular.bootstrap(document, ['app']);
});