// Partners carousel (uses the Owl Carousel library)
  $(".partners-carousel").owlCarousel({
    autoplay: true,
    autoplayTimeout:4000,
    smartSpeed: 6000,
    slideTransition: 'linear',
    autoplayHoverPause: true,
    dots: false,
    loop: true,
    responsive: {
      0: {
        items: 2
      },
      768: {
        items: 4
      },
      900: {
        items: 6
      }
    }
  });

// TABS CHANGE ACTION
$(function () {
  $('.nav-pills a').on('click', function (e) {
    e.preventDefault();
    $(this).tab('show');
  });
});

$(function() {
  $('a[data-toggle="tab"]').on('shown.bs.tab', function (e) {
    console.log("entro");
    history.pushState({}, '', e.target.hash);
  });

  var hash = document.location.hash;
  var prefix = "tab_";
  if (hash) {
    $('.nav-pills a[href="'+hash.replace(prefix,"")+'"]').tab('show');
  }
});
