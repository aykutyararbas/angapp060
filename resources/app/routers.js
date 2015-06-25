/**
 * Created by ayararba on 6/25/15.
 */

    'use strict';
    function demoConfig($routeProvider) {
        $routeProvider.when('/', {
            templateUrl: 'views/people.html',
            controller: "PeopleController",
            controllerAs: 'c'
        }).when('/orders', {
                templateUrl: 'views/orders.html'
                //controller: "OrdersController",
               // controllerAs: 'o'
        });
    };

    angular.module('demo').config(demoConfig);

