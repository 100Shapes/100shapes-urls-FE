export default ngModule => {

    let urllib = require('url');

    ngModule.service('LinkService', LinkService);

    function LinkService(SHORT_URL_HOSTNAME, $q, UrlGeneratorService, CampaignsService, SourcesService, MediumsService, ConfigurationsService, ShortLinksService) {
        "use strict";

        return {

            _saveCampaign(name) {
                return CampaignsService.add(name)
                    .then((ref) => {
                        return ref.key();
                    });
            },

            _saveSource(name) {
                return SourcesService.add(name)
                    .then((ref) => {
                        return ref.key();
                    });
            },

            _saveMedium(source, medium) {
                return MediumsService.addToSource(source, medium)
                    .then((ref) => {
                        return ref.key();
                    });
            },

            _saveShort(url) {
                return ShortLinksService.add(url)
                    .then((ref) => {
                        const key = ref.key();
                        return urllib.resolve(SHORT_URL_HOSTNAME, key);
                    });
            },

            create(url, params) {

                let campaign = this._saveCampaign(params.campaign);

                let source = this._saveSource(params.source);

                let medium = source
                    .then((source) => {
                        return this._saveMedium(source, params.medium);
                    });

                const generatedUrl = UrlGeneratorService.generate(url, params);
                let shortUrl = this._saveShort(generatedUrl);

                $q.all([
                    campaign,
                    source,
                    medium,
                    shortUrl
                ]).then((values) => {

                    const [campaign, source, medium, shortUrl] = values;

                    const params = {
                        campaign,
                        source,
                        medium,
                        shortUrl
                    };

                    ConfigurationsService.add(url, params);
                });


            },

            list(url) {

            }

        };
    }
}