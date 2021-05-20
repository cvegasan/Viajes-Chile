
$(function(){
  // Smooth scroll
    $("a").click(function(event){
      if (this.hash !== "") {
        event.preventDefault();
  
        var gato = this.hash;
  
        $("html, body").animate({
          scrollTop: $(gato).offset().top
        }, 800, function(){
          window.location.hash = gato;
        });
      }
    });
  // comentarios en carousel al ubicarse sobre ícono
    $('[data-toggle="popover"]').popover();
  
  });

