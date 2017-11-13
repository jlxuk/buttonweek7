<!-- For more info on jQuery Mobile,  touch gestures and other useful events see : http://api.jquerymobile.com/category/events/ -->

//global variables



//event listeners & handlers
$(document).on("pagecreate","#pageone",function(){
  
	$('#button1').on("tap", function(){
        
        var value = random();
        
        alert(value);
        
        if value = true 
        {
            navigator.notification.beep(1);
        }
        
        if value = false 
        {
            navigator.notification.beep(2);
        }
    
    }); 
});


//global functions
function random(){
    return !Math.round(Math.random());

}