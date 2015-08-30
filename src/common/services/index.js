export default ngModule => {
    require('./CampaignsService')(ngModule);
    require('./SourcesService')(ngModule);
    require('./MediumsService')(ngModule);
    require('./ShortLinksService')(ngModule);
    require('./LongLinksService')(ngModule);
    require('./UrlGeneratorService')(ngModule);
}