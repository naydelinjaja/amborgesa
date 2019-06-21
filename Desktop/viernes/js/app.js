 $(document).ready(function(){
    $('.sidenav').sidenav();
   $('.slider').slider({
   	duration:600,
   	indicators:false,
   	interval: 500
   });
    $('.tabs').tabs();
     $('.parallax').parallax();
     $('.collapsible').collapsible({
     	inDuration:10000
     });
      $('.parallax').parallax();
      $('.tap-target').tapTarget();
      $('input.autocomplete').autocomplete({
            data: {
              "Apple": null,
              "Microsoft": null,
              "Google": 'https://placehold.it/250x250'
            },
            limit:0
       });
  });
 $(document).ready(function(){
    $('.sidenav').sidenav();
  });
  $(document).ready(function(){
    $('.slider').slider({
      indicators: false,
      interval:2000,
      duration:2000
    });
  });
   $(document).ready(function(){
    $('.collapsible').collapsible();
  });
        
        