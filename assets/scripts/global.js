/* ------------------------------

   Responsive Starter Kit
   Global JS Functions

--------------------------------- */

// General purpose functions
$(document).ready(function () {

    // modal for general content (fancyBox)
    if ($(".fancybox").length > 0) {
        $(".fancybox").fancybox({
            maxWidth: 800,
            maxHeight: 600
        });
    }

    // modal for video player (fancyBox)
    if ($('.fancybox-media').length > 0) {
        $('.fancybox-media').fancybox({
            width: 800,
            height: 450,
            padding: 2,
            openEffect: 'none',
            closeEffect: 'none',
            helpers: {
                media: {}
            }
        });
    }

    // flexible videos (fitVids)
    if ($('.flexible-video').length > 0) {
        $(".flexible-video").fitVids();
    }
    
});