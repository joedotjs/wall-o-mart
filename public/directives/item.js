app.directive('item', function () {
    return {
        restrict: 'E',
        templateUrl: '/templates/item.html',
        scope: {
            theItem: '='
        }
    };
});