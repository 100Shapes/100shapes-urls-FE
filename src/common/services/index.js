export default ngModule => {
    require('./CampaignsService')(ngModule);
    require('./SourcesService')(ngModule);
    require('./MediumsService')(ngModule);
    require('./LinkService')(ngModule);
    require('./ShortLinksService')(ngModule);
    require('./ConfigurationsService')(ngModule);
    require('./UrlGeneratorService')(ngModule);
}