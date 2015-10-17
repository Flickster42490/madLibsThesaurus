var madApp = angular.module("madLib", [])

madApp.factory('madFactory',['$http', function($http){
    var partSpeechArr;
    var adjGetter = function(userWord){
    return $http.get('http://words.bighugelabs.com/api/2/cf731533bebea34239bf31114f2d056b/'+userWord+'/json')
              .then(function(data){
                partSpeechArr = data.data.adjective.syn;
                // return partSpeechArr[Math.floor(Math.random()*partSpeechArr.length)];
                return partSpeechArr[0];
              }, 
              function(data){
                return 'invalid';
              });
    }
    var nounGetter = function(userWord){
    return $http.get('http://words.bighugelabs.com/api/2/cf731533bebea34239bf31114f2d056b/'+userWord+'/json')
              .then(function(data){
                partSpeechArr =data.data.noun.syn;
                return partSpeechArr[Math.floor(Math.random()*partSpeechArr.length)];
              }, 
              function(data){
                return 'invalid';
              });
    }
    var verbGetter = function(userWord){
    return $http.get('http://words.bighugelabs.com/api/2/cf731533bebea34239bf31114f2d056b/'+userWord+'/json')
              .then(function(data){
                partSpeechArr =data.data.verb.syn;
                return partSpeechArr[Math.floor(Math.random()*partSpeechArr.length)];
              }, 
              function(data){
                return 'invalid';
              });
    }
    var saveLib = function(element){
      return $http.post('/save', {story: element})
            .then(function(data){
              console.log(data)
              return data;
            });
    }
    var getLib = function(){
      return $http.get('/save')
                .then(function(response){
                  return response;
                })
    }
    return {adjGetter: adjGetter, nounGetter: nounGetter, verbGetter: verbGetter, saveLib: saveLib, getLib: getLib} 
}]);

madApp.controller('madCtrl', ['$scope','$http','madFactory', function($scope, $http, madFactory){
    $scope.add = function(){
      var storyText = angular.element($('#storyContainer'))[0].children[0].innerText;
      madFactory.saveLib(storyText).then(function(data){
      })
    };
    $scope.get = function(){
      madFactory.getLib().then(function(data){
        console.log(data.data.story, 'datadata');
        angular.element($('#retrievedStory')).html('YOUR SAVED STORY:   ' + data.data.story);
      });
    };
    $scope.getterCtrl = function(){
      madFactory.adjGetter($scope.word1).then(function(data){
        if(data==='invalid'){
          alert($scope.word1 +' is either a naughty word or not a word. Try again.');
          $scope.word1;
        }else{
          $scope.word1 = data;
        }
      });
      madFactory.nounGetter($scope.word2).then(function(data){
        if(data === 'invalid'){
          alert($scope.word2 +' is either a naughty word or not a word. Try again.');
          $scope.word2;
        }else{
          $scope.word2 = data;
        }
      });
      madFactory.nounGetter($scope.word3).then(function(data){
        if(data === 'invalid'){
          alert($scope.word3 +' is either a naughty word or not a word. Try again.');
          $scope.word3;
        }else{
          $scope.word3 = data;
        }
      });
      madFactory.verbGetter($scope.word4).then(function(data){
        if(data === 'invalid'){
          alert($scope.word4 +' is either a naughty word or not a word. Try again.');
          $scope.word4;
        }else{
          $scope.word4 = data;
        }
      });
      madFactory.nounGetter($scope.word5).then(function(data){
        if(data === 'invalid'){
          alert($scope.word5 +' is either a naughty word or not a word. Try again.');
          $scope.word5;
        }else{
          $scope.word5 = data;
        }
      });
      madFactory.adjGetter($scope.word6).then(function(data){
        if(data === 'invalid'){
          alert($scope.word6 +' is either a naughty word or not a word. Try again.');
          $scope.word6;
        }else{
          $scope.word6 = data;
        }
      });
      madFactory.verbGetter($scope.word7).then(function(data){
        if(data === 'invalid'){
          alert($scope.word7 +' is either a naughty word or not a word. Try again.');
          $scope.word7;
        }else{
          $scope.word7 = data;
        }
      });
      madFactory.verbGetter($scope.word8).then(function(data){
        if(data === 'invalid'){
          alert($scope.word8 +' is either a naughty word or not a word. Try again.');
          $scope.word8;
        }else{
          $scope.word8 = data;
        }
      });
      alert('its ready! Click on a MadLib!');
    };
}]);



