/**
 * Created by ayararba on 6/25/15.
 */

function demoService($http){
    var service=this;
    service.getPeople = function() {
        return $http.get('people.json');
    }
}

angular.module('demo').service('demoService', ['$http', demoService]);