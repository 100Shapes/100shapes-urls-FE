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
            vm.isSaving = false;
        };

        vm.create = () => {
            "use strict";

            vm.isSaving = true;
            const generatedUrl = UrlGeneratorService.generate(vm.inputUrl, vm.params);

            ShortLinksService.add(generatedUrl).then((ref) => {
                vm.reset();
                const key = ref.key();
                vm.outputUrl = `http://100s.co/${key}`;
            });

        };

    }


};
