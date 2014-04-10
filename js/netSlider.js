(function ( $ ) {

     $.fn.netSlider = function( options ) {

/*----
plugin default options
----*/
        /*
        // default plugin settings
        // accept if usr defined a setting -> options
        */
        var settings = $.extend({
            slide_next_in: "animated rollIn",
            slide_next_out: "animated rollOut",
            slide_pre_in: "animated rollIn",
            slide_pre_out: "animated rollOut"
        }, options );



        /*
        // add required styles
        //
        // to make full width slider
        // display only active slider
        */
        this.prepend('<style type="text/css">.slides li{list-style:none;display:none;}.slides li img{width:100%;}.slides li:first-child{display: block;}</style>')


        /*
        // preparing the slider
        // 
        // -> add .slider_wraper to <div>
        // -> add .slides to <ul>
        // -> add slider controllers " < ", " > "
        */
        this.addClass('slider_wraper')
        this.find('ul').addClass('slides')
        // this.prepend('<a href="" class="next"><h2>></h2></a><a href="" class="previous"><h2><</h2></a>')



/*----
Event listeners
----*/
        /*
        // listen to the ">" (.next) click
        // call function next_slide()
        */
        $(document).on('click', '.next', function (e) {
            e.preventDefault()
            next_slide()
        })


        /*
        // listen to the "<" (.previous) click
        // call function prevous_slide()
        */
        $(document).on('click', '.previous', function (e) {
            e.preventDefault()
            prevous_slide()
        })



/*----
Functions
----*/
        /*
        // takes to the next [">" (.next)] slider
        */
        // function next_slide () {
        //     $('.slides li:nth-child(2)').addClass(settings.slide_next_in).one('animationend webkitAnimationEnd MSAnimationEnd oAnimationEnd', function(e) {
        //             $('.slides li').removeClass();
        //         });

        //     $('.slides li:first-child').addClass(settings.slide_next_out).one('animationend webkitAnimationEnd MSAnimationEnd oAnimationEnd', function(e) {
        //         $('.slides li:first-child').appendTo('.slides').removeClass();
        //     });
        // }

        function next_slide () {
            $('.slides li:first-child').addClass(settings.slide_next_out).one('animationend webkitAnimationEnd MSAnimationEnd oAnimationEnd', function(e) {
                    $('.slides li:first-child').appendTo('.slides')
                    $('.slides li:first-child').addClass(settings.slide_next_in).one('animationend webkitAnimationEnd MSAnimationEnd oAnimationEnd', function(e) {
                        $('.slides li').removeClass();
                    });
                });
            
            // $('.slides li:first-child').addClass(settings.slide_next_out).one('animationend webkitAnimationEnd MSAnimationEnd oAnimationEnd', function(e) {
            //     $('.slides li:first-child').appendTo('.slides').removeClass();
            // });
        }
        // end function next_slide


        /*
        // takes to the prevous ["<" (.prevous)] slider
        */
        function prevous_slide () {
            $('.slides li:first-child').addClass(settings.slide_pre_out).one('animationend webkitAnimationEnd MSAnimationEnd oAnimationEnd', function(e) {
                $('.slides li:last-child').addClass(settings.slide_pre_in).prependTo('.slides').one('animationend webkitAnimationEnd MSAnimationEnd oAnimationEnd', function(e) {
                    $('.slides li').removeClass();
                });
            });
        }
        // function next_slide

    };

 
}( jQuery ));
