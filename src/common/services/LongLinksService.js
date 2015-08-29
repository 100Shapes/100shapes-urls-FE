export default ngModule => {

    const url = require('url');
    const crypto = require('crypto');


    ngModule.service('LongLinksService', LongLinksService);

    function LongLinksService($firebaseArray, $firebaseObject, FIREBASE_URL) {
        "use strict";

        const ref = new Firebase(`${FIREBASE_URL}/longs`);

        return {

            hashForUrl(longUrl) {

                return crypto
                    .createHash('md5')
                    .update(longUrl)
                    .digest("hex");
            },

            add(longUrl) {

                const urlHash = this.hashForUrl(longUrl);
                const linkRef = ref.child(urlHash);

                let link = $firebaseObject(linkRef);
                link.$save();
            }
        };
    }
}