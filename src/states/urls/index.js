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

    function UrlsCtrl(LinkService, CampaignsService, ShortLinksService, ConfigurationsService, MediumsService, SourcesService, UrlGeneratorService) {
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

            vm.configurations = ConfigurationsService.listForUrl(vm.inputUrl);
        };

        vm.reset = () => {
            "use strict";
            vm.params = {};
            vm.inputUrl = '';
            vm.configurations = [];
            vm.urlForm.$setPristine();
            vm.urlForm.setUntouched();
            vm.isSaving = false;
        };

        vm.setOutputUrl = (url) => {
            vm.outputUrl = url;
        };

        vm.create = () => {
            "use strict";

            vm.isSaving = true;
            LinkService.create(vm.inputUrl, vm.params);


        };

    }


};
