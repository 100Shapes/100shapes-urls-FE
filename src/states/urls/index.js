export default ngModule => {

    ngModule
        .config(function ($stateProvider) {

            $stateProvider
                .state('urls', {
                    url: '/',
                    template: require('./urls.html'),
                    controller: 'UrlsCtrl as vm'
                });
        });

    //////

    ngModule.controller('UrlsCtrl', UrlsCtrl);

    function UrlsCtrl($timeout) {
        "use strict";
        let vm = this;

        vm.inputUrl = '';

        vm.params = {};

        vm.options = {
            campaigns: [
                {
                    label: 'Email',
                    value: 'email'
                },
                {
                    label: 'Referral',
                    value: 'referral'
                },
                {
                    label: 'Social',
                    value: 'social'
                },
                {
                    label: 'Aggregation',
                    value: 'aggregation'
                }
            ]
        };

        vm.serialize = (params) => {
            var str = [];
            for (var p in params)
                if (params.hasOwnProperty(p)) {
                    str.push(encodeURIComponent(p) + "=" + encodeURIComponent(params[p].toLowerCase().replace(/ /g, '')));
                }
            return str.join("&");
        };

        vm.reset = () => {
            "use strict";

            vm.params = {};
            vm.inputUrl = '';
        };

        vm.create = () => {
            "use strict";

            $timeout(() => {
                vm.output = 'http://100s.co/e7sd0d8?' + vm.serialize(vm.params);
            }, 500);

        };

    }


};
