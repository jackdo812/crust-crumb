jQuery(document).ready(function ($) {
    // Function to toggle shipping options based on the selected purchase method
    function toggleShippingOptions() {

        setTimeout(function () {
            if ($('#shipping_method li').length <= 1) {
                $('input[name^="purchase_method"][value^="Delivery"]').prop('disabled', true);
                $('input[name^="purchase_method"][value^="Pickup"]').prop('checked', true);
            } else {
                $('input[name^="purchase_method"][value^="Delivery"]').prop('disabled', false);

                var purchaseMethod = $('input[name="purchase_method"]:checked').val();

                // If Local Pickup is selected, 
                if (purchaseMethod === 'Pickup') {
                    //auto check local-pickup button (which is hidden)
                    $('input[name^="shipping_method"][value^="local_pickup"]').prop('checked', true);
                    // hide ship to different address checkbox
                    $('#ship-to-different-address').hide();
                } else {
                    //automatically choose flat_rate
                    $('input[name^="shipping_method"]:first').prop('checked', true);
                    //show ship to different address
                    $('#ship-to-different-address').show();
                }
            }
        }, 3000); // Set a timeout of 500 milliseconds (adjust if needed)
    }

    // Initial call to set up based on the initial state
    toggleShippingOptions();

    $('#billing_postcode').on('input', function () {
        toggleShippingOptions();
    });

    // Trigger the function when purchase method changes
    $('#purchase_method_field').on('change', 'input[name="purchase_method"]', function () {
        toggleShippingOptions();
    });
});
