angular.module("app").controller("LabController", [
  function() {
    var vm = this;

    vm.selectedDate = new Date();

    vm.options = {};
    vm.options.showWeeks = false;
    vm.options.minDate = new Date();

    return vm;
  }
]);
