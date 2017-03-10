 $(document).ready(function( ) {
        
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
        
//========================= Scroll Functions =========================\\
        
        $('#pers-nav').click(function(){
            
            $('html, body').animate({
                scrollTop: $("#personal").offset().top
            }, 500);
            
        });
        
        $('#skill-nav').click(function(){
            
            $('html, body').animate({
                scrollTop: $("#skills").offset().top
            }, 750);
            
        });
        
        $('#proj-nav').click(function(){
            
            $('html, body').animate({
                scrollTop: $("#projects").offset().top
            }, 1000);
            
        });
        
        $('#cont-nav').click(function(){
            
            $('html, body').animate({
                scrollTop: $("#contact").offset().top
            }, 1000);
            
        });
        
//========================= Scroll Functions =========================\\
    
    }); //jq finished