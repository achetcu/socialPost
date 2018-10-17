"use strict";{
    angular.module('app')
    .controller('socialPostController', function(){
        
        const $ctrl = this;
        $ctrl.hide = true;
        $ctrl.list= [
                        {title: 'Dog', 
                        thought: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum quis ligula massa. Donec scelerisque finibus sollicitudin. Nulla libero enim, convallis at erat non, ornare vulputate diam.'}, 
                        {title: 'Cat',
                        thought: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum quis ligula massa. Donec scelerisque finibus sollicitudin. Nulla libero enim, convallis at erat non, ornare vulputate diam.'},
                        {title: 'Pig',
                        thought: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum quis ligula massa. Donec scelerisque finibus sollicitudin. Nulla libero enim, convallis at erat non, ornare vulputate diam.'}, 
                        {title: 'Cow',
                        thought: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum quis ligula massa. Donec scelerisque finibus sollicitudin. Nulla libero enim, convallis at erat non, ornare vulputate diam.'},
                        {title: 'Whale',
                        thought: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum quis ligula massa. Donec scelerisque finibus sollicitudin. Nulla libero enim, convallis at erat non, ornare vulputate diam.'}
                    ];

        $ctrl.addText = function(){
                        $ctrl.hide = false;
                        $ctrl.show = true;
        
                    };
                
        $ctrl.addPost = function(post){
            $ctrl.list.unshift(post);
            $ctrl.show = false;
            $ctrl.hide = true;

        }


        }

        
            
   

    )};
    
    