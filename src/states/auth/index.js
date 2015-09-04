export default ngModule => {

    ngModule
        .config(function ($stateProvider) {

            $stateProvider
                .state('auth', {
                    url: '/auth',
                    template: require('./auth.html'),
                    controller: 'AuthCtrl as vm'
                });
        });

    //////

    ngModule.controller('AuthCtrl', AuthCtrl);

    function AuthCtrl() {
        "use strict";

    }


};
