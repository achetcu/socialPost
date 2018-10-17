"use strict";
{
    angular.module('app')
    .component('post',{
        templateUrl:'components/post/post.html',
        controller: 'postController',
        bindings:{
            item:'<',
            
           
        }
    })
    
}