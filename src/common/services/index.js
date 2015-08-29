export default ngModule => {
    require('./CampaignsService')(ngModule);
    require('./SourcesService')(ngModule);
    require('./ShortLinksService')(ngModule);
    require('./LongLinksService')(ngModule);
    require('./UrlGeneratorService')(ngModule);
}