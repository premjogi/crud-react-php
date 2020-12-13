var app = angular.module('crudApp', ['ngRoute'])

app.config(function ($routeProvider) {
    $routeProvider.when("/", {
        templateUrl: 'home.html'
    })
        .when('/students', {
            templateUrl: 'students.html',
            controller: 'myController'
        })
        .when('/insert', {
            templateUrl: 'insert.html',
            controller: 'insertController'
        })
        .when('/student/:id/edit', {
            templateUrl: 'edit.html',
            controller: 'editController'
        })
})

app.controller("editController", function ($scope, fetchData, $routeParams, $scope, $http, $location) {
    $http.get("http://localhost/AngularJS/php/single.php?id=" + $routeParams.id)
        .then(function (response) {
            console.log(response.data)
            $scope.id = response.data.id
            $scope.name = response.data.name
            $scope.email = response.data.email
            $scope.mobileNo = response.data.mobileNo
        })

    $scope.updateStudent = function (id, name, email, mobileNo) {
        fetchData.updateDetails(id, name, email, mobileNo, function (message) {
            $scope.message = message
            alert(message)
            $location.path('/students')
        })
    }
    // $http.get("http://localhost/AngularJS/php/single.php?id=" + $routeParams.id)
    //     .then(function (response) {
    //         $scope.name = response.data.name
    //         $scope.email = response.data.email
    //         $scope.id = response.data.id
    //         $scope.mobileNo = response.data.mobileNo
    //         $scope.student = response.data
    //     })
    // $scope.updateStudent = function (id, name, email, mobileNo) {
    //     fetchData.updateDetails(id, name, email, mobileNo, function (message) {
    //         $scope.message = message
    //         $location.path("/students")
    //     })
    // }
})

app.controller("myController", function ($scope, fetchData, $location) {
    fetchData.getData(function (students) {
        $scope.students = students
    })

    $scope.delete = function (id) {
        fetchData.delete(id, function (data) {
            alert(data);
            // $location.reload()
        });
    }
})

app.controller("insertController", function ($scope, fetchData, $location) {
    $scope.addStudent = function (name, email, mobileNo) {
        fetchData.insertData(name, email, mobileNo, function (message) {
            $scope.message = message
            $location.path('/students')
        })
    }
})

app.service("fetchData", function ($http) {
    this.getData = function (cb) {
        $http.get('http://localhost/AngularJS/php/fetch.php')
            .then(function (response) {
                cb(response.data)
            })
    }
    this.insertData = function (name, email, mobileNo, cb) {
        $http.post("http://localhost/AngularJS/php/insert.php?name=" + name + "&email=" + email + "&mobileNo=" + mobileNo)
            .then(function (response) {
                cb(response.data)
            })
    }
    this.delete = function (id, cb) {
        $http.get("http://localhost/AngularJS/php/delete.php?id=" + id)
            .then(function (response) {
                cb(response.data)
            })
    }

    this.updateDetails = function (id, name, email, mobileNo, cb) {
        $http.get("http://localhost/AngularJS/php/update.php?id=" + id + "&name=" + name + "&email=" + email + "&mobileNo=" + mobileNo)
            .then(function (response) {
                cb(response.data)
            })
    }

    // this.updateDetails = function (id, name, email, mobileNo, cb) {
    //     $http.get("http://localhost/AngularJS/php/update.php?id=" + id + "&name=" + name + "&email=" + email + "&mobileNo=" + mobileNo)
    //         .then(function (response) {
    //             cb(response.data)
    //         })
    // }
});