export default ngModule => {

    ngModule
        .controller('MainCtrl', MainCtrl);

    function MainCtrl($mdSidenav) {
        let vm = this;

        vm.toggleSidenav = (menuId) => {
            $mdSidenav(menuId).toggle();
        };
    }

};
