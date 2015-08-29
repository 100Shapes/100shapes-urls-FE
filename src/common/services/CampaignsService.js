export default ngModule => {

    const slugify = require('slugify');

    ngModule.service('CampaignsService', CampaignsService);

    function CampaignsService($firebaseArray, $firebaseObject, FIREBASE_URL) {
        "use strict";

        const ref = new Firebase(`${FIREBASE_URL}/campaigns`);

        let campaigns = $firebaseArray(ref);

        return {

            getOrCreate(name) {
                const slug = slugify(name).toLowerCase();
                const campaignRef = ref.child(slug);

                return $firebaseObject(campaignRef);
            },

            add(name) {

                let campaign = this.getOrCreate(name);
                campaign.$value(true);
                return campaign.$save();
            },

            list() {
                return campaigns;
            },

            isLoaded() {
                return campaigns.$loaded();
            }
        };
    }
}