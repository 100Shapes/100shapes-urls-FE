export default ngModule => {
    require('./CampaignsService')(ngModule);
    require('./ShortLinksService')(ngModule);
    require('./LongLinksService')(ngModule);
    require('./UrlGeneratorService')(ngModule);
}