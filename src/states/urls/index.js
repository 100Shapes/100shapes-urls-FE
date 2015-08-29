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

    function UrlsCtrl(CampaignsService, ShortLinksService, LongLinksService, UrlGeneratorService, $timeout) {
        "use strict";
        let vm = this;

        vm.inputUrl = '';

        vm.params = {};

        vm.options = {
            campaigns: [{
                $id: 'Interactive Display Screen'
            }]
        };

        vm.loadCampaigns = () => {
            //vm.options.campaigns = CampaignsService.getList();
            return CampaignsService.isLoaded();
        };

        vm.reset = () => {
            "use strict";

            vm.params = {};
            vm.inputUrl = '';
        };

        vm.create = () => {
            "use strict";
            const generatedUrl = UrlGeneratorService.generate(vm.inputUrl, vm.params);

            CampaignsService.add(vm.params.campaign);
            ShortLinksService.add(generatedUrl);
            LongLinksService.add(vm.inputUrl);
        };

    }


};
