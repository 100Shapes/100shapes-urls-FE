export default ngModule => {

    ngModule
        .config(function($stateProvider) {

            $stateProvider
                .state('main', {
                    url: '',
                    template: require('./main.html'),
                    controller: 'MainCtrl as vm'
                });
        });

    ////////////////

    ngModule
        .controller('MainCtrl', MainCtrl);

    function MainCtrl() {

    }

};