$(function(){

    $("a").click(function(event){
    if (this.hash !== "") {
        event.preventDefault();
    
        var signo = this.hash;
    
        $("html, body").animate({
            scrollTop: $(signo).offset().top
        }, 800, function(){
            window.location.hash = signo;
        });
    }
    });
       
    $('[data-toggle="popover"]').popover();

     $('[data-toggle="tooltip"]').tooltip()

    
    });