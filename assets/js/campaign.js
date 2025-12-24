// Campaign Page JavaScript
$(document).ready(function () {
    // Donation tier selection
    $('.donation-tier').click(function () {
        $('.donation-tier').removeClass('active').find('i').hide();
        $(this).addClass('active').find('i').show();
        $('#customAmount').val($(this).data('amount'));
    });

    // Payment method switching
    $('input[name="payment"]').change(function () {
        $('#cardFields, #upiFields, #bankFields').hide();
        $('#' + $(this).val() + 'Fields').show();
    });

    // Trigger change on load to show correct fields
    $('input[name="payment"]:checked').trigger('change');

    // Custom amount input
    $('#customAmount').on('input', function () {
        if ($(this).val()) {
            $('.donation-tier').removeClass('active').find('i').hide();
        }
    });

    // Smooth scroll to donation form
    $('a[href="#donationForm"]').click(function (e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: $('#donationForm').offset().top - 100
        }, 800);
    });

    // Form validation
    $('form').submit(function (e) {
        var amount = $('#customAmount').val();
        var selectedTier = $('.donation-tier.active').length;

        if (!amount && !selectedTier) {
            e.preventDefault();
            alert('Please select a donation amount or enter a custom amount.');
            return false;
        }
    });
});
