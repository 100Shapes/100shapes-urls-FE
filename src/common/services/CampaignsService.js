export default ngModule => {

    const slugify = require('slugify');

    ngModule.service('CampaignsService', CampaignsService);

    function CampaignsService($firebaseArray, FIREBASE_URL) {
        "use strict";

        const ref = new Firebase(`${FIREBASE_URL}/campaigns`);

        let campaigns = $firebaseArray(ref);

        return {

            add(name) {

                return campaigns.$add({
                    name: name,
                    slug: slugify(name)
                });
            },

            getList() {
                return campaigns;
            },

            isLoaded() {
                return campaigns.$loaded();
            }
        };
    }
}