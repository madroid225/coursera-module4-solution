(function () {
    'use strict';

    angular.module('MenuApp').config(RoutesConfig);

    RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
    function RoutesConfig($stateProvider, $urlRouterProvider) {

        // Redirect to home page if no other URL matches
        $urlRouterProvider.otherwise('/');

        // *** Set up UI states ***
        $stateProvider.state('home', {
            url: '/',
            templateUrl: 'src/menuapp/templates/home.template.html'
        })
        
        .state('categories', {
            url: '/categories',
            templateUrl: 'src/menuapp/templates/main-categories.template.html',
            controller: 'CategoriesController as catController',
            resolve: {
                //carica l'elenco delle categorie
                items: ['MenuDataService', function (MenuDataService) {
                    console.log('resolve');
                    return MenuDataService.getAllCategories();

                }]
            }
        })

        .state('items', {
            url: '/items/{categoryId}',
            templateUrl: 'src/menuapp/templates/main-items.template.html',
            controller: 'ItemsController as itemDetail',
            resolve: {
                //carica l'elenco delle categorie
                result: ['MenuDataService', '$stateParams', function (MenuDataService, $stateParams) {
                    console.log('resolve:' + $stateParams.categoryId);
                    return MenuDataService.getItemsForCategory($stateParams.categoryId);
                }]
            }
        });

    }
})();
