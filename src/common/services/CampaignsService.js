export default ngModule => {


    ngModule.service('CampaignsService', CampaignsService);

    function CampaignsService() {
        "use strict";

        return {
            getList() {
                return [
                    'dog',
                    'man',
                    'cat'
                ]
            }
        };
    }
}