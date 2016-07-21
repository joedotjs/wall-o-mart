app.factory('Items', function ($http) {

    return {
        getAll: function () {
            return $http.get('/api/items')
                .then(function (resObj) {
                    return resObj.data;
                });
        },
        getOneByName: function (nameOfItem) {
            return $http.get('/api/items/' + nameOfItem)
                .then(function (resObj) {
                    return resObj.data;
                });
        }
    };

});