export default ngModule => {

    ngModule

        // Enable HTML5 mode
        .config(function ($locationProvider) {

            $locationProvider
                .hashPrefix('!');
        })


    ;
}