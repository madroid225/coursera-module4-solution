(function () {
    'use strict';

    angular.module('MenuApp')
    .service('MenuDataService', MenuDataService)
    .constant('ApiBasePath', "https://davids-restaurant.herokuapp.com");

    MenuDataService.$inject = ['$http', 'ApiBasePath']
    function MenuDataService($http, ApiBasePath) {
        var service = this;

        service.getAllCategories = function () {
            var remoteUrl = (ApiBasePath + '/categories.json');
            console.log('getAllCategories:' + remoteUrl);

            return $http({
                method: 'GET',
                url: remoteUrl
            }).then(function (result) {
                console.log(result.data);
                return result.data;
            }, function (result) {
                console.log('Errore' + result);
            });
        };

        service.getItemsForCategory = function (categoryShortName) {
            var remoteUrl = (ApiBasePath + '/menu_items.json?category=' + categoryShortName);
            console.log('getItemsForCategory:' + remoteUrl);

            return $http({
                method: 'GET',
                url: remoteUrl
            }).then(function (result) {
                console.log(result.data);
                return result.data;
            }, function (result) {
                console.log('Errore' + result);
            });
        };

    }

})();
