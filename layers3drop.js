(function ($) {

Drupal.behaviors.layers3drop = {
    attach: function (context) {
        $('.l3d-container').layers3D({
            mode: 'fullsize',
            responsive: true,
            movement: 'vertical'
        });
    }
};

})(jq171);
