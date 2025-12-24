
(function ($) {

  "use strict";

  // COUNTER NUMBERS
  jQuery('.counter-thumb').appear(function () {
    jQuery('.counter-number').countTo();
  });

  // CUSTOM LINK
  $('.smoothscroll').click(function () {
    var el = $(this).attr('href');
    var elWrapped = $(el);
    var header_height = $('.navbar').height();

    scrollToDiv(elWrapped, header_height);
    return false;

    function scrollToDiv(element, navheight) {
      var offset = element.offset();
      var offsetTop = offset.top;
      var totalScroll = offsetTop - navheight;

      $('body,html').animate({
        scrollTop: totalScroll
      }, 300);
    }
  });

  // Popular Causes Carousel
  if ($("#popular-causes-carousel").length) {
    $("#popular-causes-carousel").owlCarousel({
      loop: true,
      margin: 25,
      nav: true,
      autoplay: true,
      autoplayTimeout: 3000,
      autoplayHoverPause: true,
      responsive: {
        0: {
          items: 1
        },
        576: {
          items: 2
        },
        992: {
          items: 3
        },
        1200: {
          items: 4
        }
      },
      navText: ["<i class='bi-arrow-left'></i>", "<i class='bi-arrow-right'></i>"]
    });
  }

})(window.jQuery);

// function openRegistrationModal(type) {
//   const modal = new bootstrap.Modal(document.getElementById('registrationModal'));
//   const select = document.getElementById('modal-registration-type');

//   // Set the value and trigger change event
//   select.value = type;
//   toggleModalRegistrationForm();

//   modal.show();
// }

function toggleModalRegistrationForm() {
  const type = document.getElementById('modal-registration-type').value;
  const ngoFields = document.getElementById('modal-ngo-fields');
  const donorFields = document.getElementById('modal-donor-fields');

  if (type === 'ngo') {
    ngoFields.style.display = 'block';
    donorFields.style.display = 'none';

    // Enable required fields for NGO
    document.getElementById('org-name').required = true;
    document.getElementById('org-email').required = true;
    document.getElementById('org-type').required = true;
    document.getElementById('need-type').required = true;
    document.getElementById('city').required = true;
    document.getElementById('state').required = true;
    document.getElementById('country').required = true;
    document.getElementById('description').required = true;

    // Disable required fields for Donor
    document.getElementById('donor-first-name').required = false;
    document.getElementById('donor-last-name').required = false;
    document.getElementById('donor-email').required = false;
    document.getElementById('donor-city').required = false;
    document.getElementById('donor-state').required = false;
    document.getElementById('donor-country').required = false;
    document.getElementById('donation-type').required = false;

  } else if (type === 'donor') {
    ngoFields.style.display = 'none';
    donorFields.style.display = 'block';

    // Disable required fields for NGO
    document.getElementById('org-name').required = false;
    document.getElementById('org-email').required = false;
    document.getElementById('org-type').required = false;
    document.getElementById('need-type').required = false;
    document.getElementById('city').required = false;
    document.getElementById('state').required = false;
    document.getElementById('country').required = false;
    document.getElementById('description').required = false;

    // Enable required fields for Donor
    document.getElementById('donor-first-name').required = true;
    document.getElementById('donor-last-name').required = true;
    document.getElementById('donor-email').required = true;
    document.getElementById('donor-city').required = true;
    document.getElementById('donor-state').required = true;
    document.getElementById('donor-country').required = true;
    document.getElementById('donation-type').required = true;
  }
}
