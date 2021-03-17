var marker = document.querySelector('#marker');
        var item = document.querySelectorAll('nav .nav-link a');

        function indicator(e){
            marker.style.left = e.offsetLeft +"px";
            marker.style.width = (e.offsetWidth-20) +"px";
        }

        item.forEach(link => {
            link.addEventListener('click', (e) => {
                indicator(e.target);
            })
        })

        const nextbtn = document.querySelector('.owl-next')
        const prevbtn = document.querySelector('.owl-prev')

        $('.photo-carousel').owlCarousel({
            loop:true,
            margin:10,
            nav:true,
            navText: [
                prevbtn,
                nextbtn
            ],
            autoWidth:true,
            dots:false,
            responsive:{
                0:{
                    items:1
                },
                600:{
                    items:3
                },
                1000:{
                    items:3
                }
            }
        });

        $('.supervisor').owlCarousel({
            loop:true,
            margin:100,
            nav:true,
            center:true,
            autoplay:true,
            autoWidth:true,
            dots:false,
            responsive:{
                0:{
                    items:1
                },
                600:{
                    items:3
                },
                1000:{
                    items:3
                }
            }
        });
    

        $('.main-carousel').flickity({
            // options
            cellAlign: 'left',
            contain: true
        });

        $('.page-scroll').on('click', function (e) {

            $(this).parent().addClass('active').siblings().removeClass('active')

            let href = $(this).attr('href');
            let elementHref = $(href);

            $('html, body').animate({
                scrollTop: elementHref.offset().top - 140
            });

            e.preventDefault();
        })

        $(document).ready(function(){
                $(window).scroll(function(){
                    var scroll = $(window).scrollTop();
                    if (scroll > 450
                    ) {
                       $('nav').css("background-color", "#252525").css("transition",".5s","ease");
                    }

                    else{
                        $('nav').css("background-color", "transparent"); ;  	
                    }
                })
            })

        
        
                

            