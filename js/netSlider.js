(function ( $ ) {

     $.fn.netSlider = function() {
        

        /*
        // add required styles
        //
        // to make full width slider
        // display only active slider
        */
        this.prepend('<style type="text/css">.slides li{list-style:none;display:none;}.slides li img{width:100%;}.slides .active{display: block;}</style>')


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
        this.find('ul').append('slides')
        this.find('ul li:first-child').addClass('active')
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
            clearInterval(autoSlide);
            setInterval(function(){next_slide ()}, 5000);
        })


        /*
        // listen to the "<" (.previous) click
        // call function prevous_slide()
        */
        $(document).on('click', '.previous', function (e) {
            e.preventDefault()
            prevous_slide()
            clearInterval(autoSlide);
            setInterval(function(){prevous_slide ()}, 5000);
        })

        /*
        // Init the auto play 
        // TODO // not functional well
        */
        // auto_play()


        setInterval(function(){next_slide ()}, 5000);

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
            if($('.slides').find('li.active').is(':last-child')){

                $('.slides').find('li:last-child').removeClass('active')
                $('.slides').find('li:first-child').addClass('active')
            }
            else{
                $('.slides').find('li.active').removeClass('active').next().addClass('active')
            }
            // auto_play ()
        }
        // end function next_slide


        /*
        // takes to the prevous ["<" (.prevous)] slider
        */
        function prevous_slide () {
            if($('.slides').find('li.active').is(':first-child')){

                $('.slides').find(':first-child').removeClass('active')
                $('.slides').find('li:last-child').addClass('active')
            }
            else{
                $('.slides').find('li.active').removeClass('active').prev().addClass('active')
            }
            auto_play ()
        }
        // function next_slide
        

    };

 
}( jQuery ));
