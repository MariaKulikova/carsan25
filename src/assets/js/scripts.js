(function ($, window, document, undefined) {

    'use strict';

    $(document).ready(function () {

        $('a[href^="#"]').on('click', function (event) {
            var target = $($(this).attr('href'));

            if (target.length) {
                event.preventDefault();
                $('body').animate({
                    scrollTop: target.offset().top
                }, 500);
            }

        });
    });


})(jQuery, window, document);
