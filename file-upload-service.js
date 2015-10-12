App.service('FileUpload', ['$http', function ($http, APIConstants) {
    this.uploadFileToUrl = function(file){
        var fd = new FormData();
        fd.append('file', file);
        return $http.post(URL, fd, { // URL = server URL
            transformRequest: angular.identity,
            headers: {'Content-Type': undefined}
        }).then(function(data){
            return {data: data}
        },function(err){
            return {data: data}
        });
    }
}]);
