function openRegistrationModal(type) {
    const modal = new bootstrap.Modal(document.getElementById('registrationModal'));
    const select = document.getElementById('modal-registration-type');

    // Set the value and trigger change event
    select.value = type;
    toggleModalRegistrationForm();

    modal.show();
}

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

// Smooth scroll to section on page load if hash exists
$(document).ready(function () {
    if (window.location.hash) {
        var hash = window.location.hash;
        setTimeout(function () {
            if ($(hash).length) {
                $('html, body').stop().animate({
                    scrollTop: $(hash).offset().top - 90
                }, 600, 'swing');
            }
        }, 100);
    }
});

// Smooth scroll for anchor links - IMPROVED VERSION
$('a[href*="#"]:not([href="#"])').click(function (e) {
    // Check if it's the same page
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
        var target = $(this.hash);
        if (target.length) {
            e.preventDefault();

            // Stop any ongoing animations to prevent sticking
            $('html, body').stop(true, false);

            // Update URL
            history.pushState(null, null, this.hash);

            // Smooth scroll with faster speed (600ms)
            $('html, body').animate({
                scrollTop: target.offset().top - 90
            }, 600, 'swing', function () {
                // Optional: Add focus to the target for accessibility
                target.attr('tabindex', '-1').focus();
            });

            return false;
        }
    }
});
