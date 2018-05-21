angular.module("app").controller("LabController", [
  function() {
    var vm = this;

    vm.persons = [
      {
        name: "Mark Twain",
        nationality: "American",
        birthdate: new Date(1835, 11, 30),
        deathdate: new Date(1910, 4, 21)
      },
      {
        name: "A. A. Milne",
        nationality: "English",
        birthdate: new Date(1882, 1, 18),
        deathdate: new Date(1956, 1, 31)
      },
      {
        name: "Ernest Hemingway",
        nationality: "American",
        birthdate: new Date(1899, 7, 21),
        deathdate: new Date(1961, 7, 2)
      },
      {
        name: "Charles Dickens",
        nationality: "English",
        birthdate: new Date(1812, 2, 7),
        deathdate: new Date(1870, 6, 9)
      },
      {
        name: "Jane Austen",
        nationality: "English",
        birthdate: new Date(1775, 12, 16),
        deathdate: new Date(1817, 7, 18)
      },
      {
        name: "Leo Tolstoy",
        nationality: "Russian",
        birthdate: new Date(1828, 9, 9),
        deathdate: new Date(1910, 11, 20)
      }
    ];

    vm.showDetails = showDetails;

    function showDetails(person) {
      alert("Show details for: " + person.name);
    }
  }
]);
