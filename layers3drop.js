(function ($) {

Drupal.behaviors.layers3drop = {
    attach: function (context) {
        $('.l3d-container').layers3D({
            transition : 'realtime',
					responsive : false
        });
    }
};

})(jq171);
