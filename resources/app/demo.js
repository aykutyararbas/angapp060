/**
 * Created by ayararba on 6/25/15.
 */

//PeopleController.$inject=['$scope'];
//Inject and make sure first param is
function PeopleController(demoService){
    var controller = this;
    controller.searchText={name: 'Demo'};
    controller.people = null;

    function init(){
        demoService.getPeople().success(
            function(response){
                console.log(response);
                controller.people=response;
        });
    }

    init();
};
angular.module('demo').controller('PeopleController',['demoService',PeopleController]);