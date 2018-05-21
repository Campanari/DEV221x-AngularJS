angular.module("app")
    .directive("personsTable", personsTableDirective);

personsTableDirective.$inject = [];

function personsTableDirective() {
    return {
        restrict: "E",
        scope: {
            persons: "=",
            showDetails: "&"
        },
        templateUrl: "./app/personsTableTemplate.html",
        replace: true,
        link: link
    };

    function link(scope, element, attrs) {
        element.children()
        element.bind('mouseenter', function() {
            element.css('background-color', 'silver');
          });
          element.bind('mouseleave', function() {
            element.css('background-color', 'white');
          });
    }
}