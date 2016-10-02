$(document).ready(function( ) {
      /*  var slideIn = function(name, direction){
            if(name.hasClass('visible')) {
                name.animate({
                direction: '-1000px'
                }, 1000).removeClass('visible');
            } else {
                name.animate({
                    direction: '0px'
                }, 1000 ).addClass('visible');
            }   
        };*/
        
        /*slideIn("fname", "left");
            slideIn(lname, "right");*/
        
        $(window).load(function(){
            var fname = $("#fname");
            var lname = $("#lname");

            if(fname.hasClass('visible')) {
                fname.animate({
                    left: '-1000px'
                }, 1000).removeClass('visible');
            } else {
               fname.animate({
                    left: '0px'
                }, 1000 ).addClass('visible');
            }
            
            if(lname.hasClass('visible')) {
                lname.animate({
                    right: '-1000px'
                }, 1000).removeClass('visible');
            } else {
               lname.animate({
                    right: '0px'
                }, 1000 ).addClass('visible');
            }
            
        });
        
        $("#kicker").slideDown(1000);
    
    }); //jq finished