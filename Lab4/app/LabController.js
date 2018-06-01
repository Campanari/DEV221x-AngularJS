angular
    .module('app')
    .controller('LabController', [labController]);

function labController() {
    var vm = this;
    vm.Message = 'This is from Angular';
}