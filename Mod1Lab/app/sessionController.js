angular.module('app')
    .controller('sessionController', sessionController);

sessionController.$inject = ['sessionService', 'sessionFactory'];

function sessionController(sessionService, sessionFactory) {
    var vm = this;

    vm.getServiceSession = getServiceSession; 
    vm.setServiceSession = setServiceSession;
    vm.clearServiceSession = clearServiceSession; 
    vm.getFactorySession = getFactorySession;
    vm.setFactorySession = setFactorySession;
    vm.clearFactorySession = clearFactorySession;
    
    var mySessionFactory = sessionFactory;

    function getFactorySession() {
        vm.model = {
            name: mySessionFactory.get('name'),
            nickname: mySessionFactory.get('nickname'),
            status: 'Retrieved by Factory on ' + new Date()
        };
    }
    
    function setFactorySession() {
        mySessionFactory.save('name', vm.model.name);
        mySessionFactory.save('nickname', vm.model.nickname);
        getFactorySession();
    }
    
    function clearFactorySession(){
        mySessionFactory.clear();
        getFactorySession();
    }

    function getServiceSession() {
        vm.model = {
            name: sessionService.get('name'),
            nickname: sessionService.get('nickname'),
            status: 'Retrieved by service on ' + new Date()
        };
    }

    function setServiceSession() {
        sessionService.save('name', vm.model.name);
        sessionService.save('nickname', vm.model.nickname);
        vm.getServiceSession();
    }

    function clearServiceSession() {
        sessionService.clear();
        vm.getServiceSession();
    }
}