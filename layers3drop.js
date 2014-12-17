(function ($) {

Drupal.behaviors.layers3drop = {
    attach: function (context) {
        if ($(window).width() >= 768) {
            $('.l3d-container').layers3D({
                transition: 'realtime',
                responsive: false
            });
        }
    }
};

})(jq171);
