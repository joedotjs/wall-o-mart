var app = angular.module('Wall-o-Mart', ['ui.router']);

app.config(function ($stateProvider) {

    $stateProvider.state('home', {
        url: '/home',
        templateUrl: '/templates/home.html',
        controller: 'MainController',
        resolve: {
            featuredItem: function (Items) {
                return Items.getOneByName('Shrek 2 Backpack');
            },
            lastPurchasedItem: function (Items) {
                return Items.getOneByName('Robert op');
            }
        }
    });

    $stateProvider.state('catalog', {
        url: '/products',
        templateUrl: '/templates/catalog.html',
        resolve: {
            catalogItems: function (Items) {
                return Items.getAll();
            }
        },
        controller: function (Items, $scope, catalogItems) {
            $scope.items = catalogItems;
        }
    });

});

app.run(function ($rootScope) {

    $rootScope.$on('$stateChangeError', function () {
        $rootScope.errorHappened = true;
        setTimeout(function () {
            $rootScope.errorHappened = false;
            $rootScope.$digest();
        }, 2 * 1000);
    });

});

app.controller('MainController', function ($scope, featuredItem, lastPurchasedItem) {

    $scope.greeting = 'Welcome to Wall-o-Mart!';
    $scope.featuredItem = featuredItem;
    $scope.lastPurchasedItem = lastPurchasedItem;


});