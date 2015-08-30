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

    function UrlsCtrl(CampaignsService, ShortLinksService, MediumsService, SourcesService, UrlGeneratorService) {
        "use strict";
        let vm = this;

        vm.inputUrl = '';

        vm.params = {};

        vm.allCampaigns = () => {
            return CampaignsService.list();
        };

        vm.allSources = () => {
            return SourcesService.list();
        };

        vm.allMediumsForSource = (source) => {
            return MediumsService.listForSource(source);
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

            CampaignsService.add(vm.params.campaign);
            SourcesService.add(vm.params.source);
            MediumsService.addToSource(vm.params.source, vm.params.medium);

            ShortLinksService.add(generatedUrl).then((ref) => {
                vm.reset();
                const key = ref.key();
                vm.outputUrl = `http://100s.co/${key}`;
            });

        };

    }


};
