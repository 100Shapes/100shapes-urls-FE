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

    function UrlsCtrl(CampaignsService, ShortLinksService, LongLinksService, MediumsService, SourcesService, UrlGeneratorService) {
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

        vm.configurations = [];

        vm.onUrlChange = () => {
            if (!vm.urlForm.url.$valid) {
                return false;
            }

            vm.configurations = LongLinksService.listForUrl(vm.inputUrl);
        };

        vm.reset = () => {
            "use strict";
            vm.isSaving = false;
            vm.params = {};
            vm.inputUrl = '';
            vm.configurations = [];
            vm.urlForm.$setPristine();
        };

        vm.setOutputUrl = (url) => {
            vm.outputUrl = url;
        };

        vm.create = () => {
            "use strict";

            vm.isSaving = true;
            const generatedUrl = UrlGeneratorService.generate(vm.inputUrl, vm.params);

            CampaignsService.add(vm.params.campaign);
            SourcesService.add(vm.params.source);
            MediumsService.addToSource(vm.params.source, vm.params.medium);
            LongLinksService.add(vm.inputUrl, vm.params);

            ShortLinksService.add(generatedUrl).then((ref) => {
                vm.reset();
                const key = ref.key();
                vm.outputUrl = `http://100s.co/${key}`;
            });

        };

    }


};
