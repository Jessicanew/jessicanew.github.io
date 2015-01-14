angular.module("mainApp").config(function($stateProvider, $urlRouterProvider){
    $urlRouterProvider.otherwise("/");
    $stateProvider.
    state('main', {
        url:'/',
        templateUrl:'/views/main.html'
    }).
    state('portfolio', {
        url:'/portfolio',
        templateUrl: '/views/portfolio.html'
    }).
    state('more', {
        url: '/moreAboutMe',
        templateUrl: '/views/about.html'    
    });  
   
});