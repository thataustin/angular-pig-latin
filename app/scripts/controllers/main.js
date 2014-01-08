'use strict';

angular.module('angularPigLatinApp')
  .controller('MainCtrl', function ($scope) {

    $scope.$watch('word', function() {
      var pigLatin = function(english) {
        english = english.toLowerCase();
        if (!english || english.match(/^[aeiou]/)) {
          return english;
        } else {
          return english.replace(/^([^aeiouy\d\W_]+)(.*)/, '$2$1ay');
        }
      };

      var pigLatinSentence = function(english) {
        var englishArray = english.split(/\W+/);
        var piglatinArray = _(englishArray).map(function(word) { return pigLatin(word) });
        return piglatinArray.join(" ");
      };
      $scope.translatedWord = pigLatinSentence($scope.word);
    });
  });
