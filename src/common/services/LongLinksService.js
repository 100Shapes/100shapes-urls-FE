export default ngModule => {

    const url = require('url');
    const crypto = require('crypto');
    const angular = require('angular');

    ngModule.service('LongLinksService', LongLinksService);

    function LongLinksService($firebaseArray, FIREBASE_URL) {
        "use strict";

        const ref = new Firebase(`${FIREBASE_URL}/longs`);

        return {

            hashForUrl(longUrl) {

                return crypto
                    .createHash('md5')
                    .update(longUrl)
                    .digest("hex");
            },

            add(longUrl, params) {

                const urlHash = this.hashForUrl(longUrl);
                const linksRef = ref.child(urlHash);
                let links = $firebaseArray(linksRef);

                let newLink = angular.extend({
                    url: longUrl,
                    shortUrl: 'http://100s/co/aaaaaa'
                }, params);

                return links.$add(newLink);
            },

            listForUrl(longUrl) {
                const urlHash = this.hashForUrl(longUrl);
                const linksRef = ref.child(urlHash);
                return $firebaseArray(linksRef);
            }
        };
    }
}