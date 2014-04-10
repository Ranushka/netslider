(function ( $ ) {

     $.fn.netSlider = function( options ) {
        


// ---------------------------------------------


        var settings = $.extend({
            // These are the defaults.
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
        // -> add .active to the first <li> child of <ul>
        // -> add slider controllers " < ", " > "
        */
        this.addClass('slider_wraper')
        this.find('ul').addClass('slides')
        // this.find('ul li').addClass(settings.slide_out)// user prefferd effict
        this.prepend('<a href="" class="next"><h1>></h1></a><a href="" class="previous"><h1><</h1></a>')



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
            // clearInterval(autoSlide);
            // setInterval(function(){next_slide ()}, 5000);
        })


        /*
        // listen to the "<" (.previous) click
        // call function prevous_slide()
        */
        $(document).on('click', '.previous', function (e) {
            e.preventDefault()
            prevous_slide()
            // clearInterval(autoSlide);
            // setInterval(function(){prevous_slide ()}, 5000);
        })

        /*
        // Init the auto play 
        // TODO // not functional well
        */
        // auto_play()


        // setInterval(function(){next_slide ()}, 5000);

        /*----
        Functions
        ----*/

        /*
        // to make auto play the slider
        // TODO // not functional well
        */
        // function auto_play () {
        //     next_slide () 
        //     // clearInterval(autoSlide);
        //     // var autoSlide = setInterval(next_slide , 5000);
        // }


        /*
        // takes to the next [">" (.next)] slider
        */
        



        function next_slide () {
            $('.slides li:nth-child(2)').addClass(settings.slide_next_in).one('animationend webkitAnimationEnd MSAnimationEnd oAnimationEnd', function(e) {
                    $('.slides li').removeClass();
                });
            $('.slides li:first-child').addClass(settings.slide_next_out).one('animationend webkitAnimationEnd MSAnimationEnd oAnimationEnd', function(e) {
                $('.slides li:first-child').appendTo('.slides').removeClass();
            });
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
