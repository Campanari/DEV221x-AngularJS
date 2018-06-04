angular
    .module('app')
    .controller('ContactUsController', [
        function () {
            var vm = this;

            vm.onClickContact = onClickContact;

            function onClickContact() {
                alert('Contact Sent');
            }
        }
    ]);