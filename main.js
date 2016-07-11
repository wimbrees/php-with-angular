import angular from 'angular';
import ngResource from 'angular-resource';

angular.module('movies', ['ngResource'])

    .controller('moviesController', function($http, $resource) {

        // jQuery uses x-www-form-urlencoded, Angular application/json
        // $http.defaults.headers.post["Content-Type"] = "application/x-www-form-urlencoded";

        var Movies = $resource('/db.php/:movieId');

        // $http({
        //   method: 'GET',
        //   url: '/db.php'
        // }).then(response => {
        //     this.movies = response.data.reverse();
        //   }, function errorCallback(response) {            
        //     // or server returns response with an error status.
        //   });            

        this.getMovies = function() {
          let movies = Movies.query(() => {
            this.movies = movies.reverse();
          });
        };

        this.getMovies();        

        this.createNewMovie = function(data) {
          // $http({
          //   method: 'POST',
          //   url: '/db.php',
          //   // jQuery
          //   data: $.param(data)
          // }).then(response => {
          //     this.movies = response.data.reverse();
          //   }, function errorCallback(response) {            
          //     // or server returns response with an error status.
          //   });               

          Movies.save(data, () => {
            this.getMovies();
          });
        };

        this.deleteMovie = function(movieId) {
          // $http({
          //   method: 'DELETE',
          //   url: `/db.php/${movieId}`
          // }).then(response => {
          //     this.movies = response.data.reverse();
          //   }, function errorCallback(response) {            
          //     // or server returns response with an error status.
          //   });
          
          // movieId will be added to the route as a param          
          Movies.delete({movieId}, () => {
            this.getMovies();
          });

        }
    });
