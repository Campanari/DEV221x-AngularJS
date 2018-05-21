angular.module('app')
    .factory('formattingFactory', formattingFactory);

function formattingFactory() {
    return {
        format: format
    };

    function format(string) {
        return string.length % 2 == 0
        ? string.toUpperCase()
        : string.toLowerCase();
    }
}