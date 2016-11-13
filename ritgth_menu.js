(function ($) {
    $(document).ready(function () {
        var summary_selector = $("#summary");
        var pos =  summary_selector.offset().top;

        $(window).scroll(function () {
            var currentPos = $(document).scrollTop();

            if (currentPos >= pos) {
                summary_selector.css('position', 'fixed');
                summary_selector.css('top', '0');
                summary_selector.css('right', '0px');
            } else {
                summary_selector.css('position', 'static');
                summary_selector.css('top', '');
                summary_selector.css('right', '');
            }
        });
    });
})(jQuery);