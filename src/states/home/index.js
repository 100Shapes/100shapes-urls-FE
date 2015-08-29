export default ngModule => {

    require('./home.less');

    ngModule
        .config(function($stateProvider) {

            $stateProvider
                .state('home', {
                    url: '',
                    template: require('./home.html'),
                    controller: 'HomeCtrl as vm',
                    resolve: {

                        important_thing() {
                            return 2;
                        }
                    }
                });
        });

    ////////////////

    ngModule
        .controller('HomeCtrl', HomeCtrl);

    function HomeCtrl(important_thing) {
        let vm = this;

        vm.thing = important_thing;

    }

};