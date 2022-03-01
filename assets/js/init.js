/* Template Name: MKBIO || Onepage fashion designer template
   Author: MK Themes
   Email: support@mkthemes.in
   Website: https://mkthemes.in
   Version: 1.0.0
   Created: February 2022
   File Description: Init all plugins here
*/

/* ======= Index =========*/




//Counter up
$(".counter").counterUp({
    delay: 20,
    time: 5000,
});


// line progressbar

$('.draw').rProgressbar({
    percentage: 95,
    fillBackgroundColor: '#333',
    backgroundColor: '#EEEEEE',
    borderRadius: '0px',
    height: '5px',
    width: '100%'
  });
$('.photoshop').rProgressbar({
    percentage: 90,
    fillBackgroundColor: '#333',
    backgroundColor: '#EEEEEE',
    borderRadius: '0px',
    height: '5px',
    width: '100%'
  });
$('.illustrator').rProgressbar({
    percentage: 85,
    fillBackgroundColor: '#333',
    backgroundColor: '#EEEEEE',
    borderRadius: '0px',
    height: '5px',
    width: '100%'
  });



  

  // init Isotope filter
var $grid = $('.grid').isotope({
  // options
});
// filter items on button click
$('.filter-button-group').on( 'click', 'li', function() {
  var filterValue = $(this).attr('data-filter');
  $grid.isotope({ filter: filterValue,});
});



$('.owl-carousel').owlCarousel({
  margin: 5,
  items: 2,
  dots: true,
  autoplay: true,
  loop: true,
  smartSpeed: 800,    
})
