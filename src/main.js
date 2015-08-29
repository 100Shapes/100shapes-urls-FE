// Libs
const angular = require('angular');
require('angular-ui-router');
require('angular-material');
require('angular-material-icons');
require('polyfill-function-prototype-bind');

// Styles
require('css/main.scss');


var ngModule = angular.module('app', [
    'ui.router',
    'ngMaterial',
    'ngMdIcons'
]);

require('./config')(ngModule);
require('./run')(ngModule);
require('./common')(ngModule);
require('./states')(ngModule);
require('./constants')(ngModule);

angular.element(document).ready(function() {
    angular.bootstrap(document, ['app']);
});