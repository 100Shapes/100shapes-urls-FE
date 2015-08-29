export default ngModule => {

    require('./ohs-hello.less');

    ngModule
        .directive('ohsHello', ohsHello);

    function ohsHello() {
        return {
            restrict: 'E',
            replace: true,
            scope: {},
            controller: 'OhsHelloCtrl as vm',
            bindToController: true,
            template: require('./ohs-hello.html')
        };
    }

    ngModule.controller('OhsHelloCtrl', OhsHelloCtrl);

    function OhsHelloCtrl($window) {
        let vm = this;

        vm.msg = 'hello';

        vm.showMessage = () => {
            $window.alert(vm.msg);
        }
    }
};