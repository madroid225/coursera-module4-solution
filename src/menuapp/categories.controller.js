(function () {
    'use strict';

    angular.module('MenuApp')
    .controller('CategoriesController', CategoriesController);


    CategoriesController.$inject = ['items'];
    function CategoriesController(items) {
        var controller = this;
        controller.items = items;
        console.log('CategoriesController : items found =' + items.length);
    }

})();
