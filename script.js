

$(document).ready(function () {


    const controller = new ScrollMagic.Controller();
    const parallaxScene = new ScrollMagic.Scene({
        triggerElement: ".header",
        triggerHook: 0,
        duration: "200%",
    })
        .setTween(".parallax-background", { y: "80%", ease: Linear.easeNone })
        .addTo(controller);


    $(".image-item img").each(function () {
        const image = $(this);
        const revealScene = new ScrollMagic.Scene({
            triggerElement: image[0],
            triggerHook: 0.8,
            reverse: true,
        })
            .setTween(image, { opacity: 1, ease: Power1.easeInOut })
            .addTo(controller);
    });

    const navbar = document.querySelector(".navbar");

    window.addEventListener("scroll", function () {

        if (window.scrollY > 740) {
            navbar.classList.add("scrolled")

        } else {
            navbar.classList.remove("scrolled");

        }
    });


    let myText = document.querySelector(".p-hide").textContent;
    let myTextLength = myText.length;

    function typing(displayedLength) {
        console.log(displayedLength)
        if (displayedLength <= myTextLength) {
            $("#text").text(myText.substring(0, displayedLength));
        }
    }

    let controllerp = new ScrollMagic.Controller({ addIndicators: true });
    let typewritingOnScroll = new TimelineMax();

    let typewritingScene = new ScrollMagic.Scene({ triggerElement: "#text", duration: myTextLength })
        .on('progress', function () {
            let scrollProgress = Math.ceil(typewritingScene.progress() * myTextLength);
            typing(scrollProgress);
        })

        .setPin()
        .setTween(typewritingOnScroll)
        .addTo(controllerp);



    let controllerv = new ScrollMagic.Controller();
    let scaleAnimation = gsap.to('.scaling-element', {
        scale: 1.3,
        duration: 1,
        ease: 'power1.out',
        paused: true,
    });

    let marginAnimation = gsap.to('.scaling-element', {
        marginBottom: '20px',
        duration: 1,
        ease: 'power1.out',
        paused: true,
    });


    new ScrollMagic.Scene({
        triggerElement: '.scaling-element',
        triggerHook: 0.5,
        duration: '100%',
    })
        .setTween(scaleAnimation)
        .addTo(controllerv);

    new ScrollMagic.Scene({
        triggerElement: '.scaling-element',
        triggerHook: 0.5,
        duration: '100%',
    })
        .setTween(marginAnimation)
        .addTo(controllerv);


    $(".nav-list li:first-child a").on("click", function (e) {
        e.preventDefault();
        $("html, body").animate({
            scrollTop: 0
        }, 1000);
    });

    $(".nav-list li:nth-child(2) a").on("click", function (e) {
        e.preventDefault();
        let aboutSection = $("#about-section");
        $("html, body").animate({
            scrollTop: aboutSection.offset().top
        }, 1000);
    });

    $(".nav-list li:nth-child(3) a").on("click", function (e) {
        e.preventDefault();
        let productSection = $("#product-container");
        $("html, body").animate({
            scrollTop: productSection.offset().top
        }, 1000);
    });


    const carousel = $('.carousel-inner');
    const images = $('.carousel-inner img');
    let currentIndex = 0;
    let scrollingEnabled = false;

    function updateCarousel() {
        images.each(function (index) {
            const angleIncrement = 360 / (images.length / 2);
            console.log(angleIncrement)
            const angle = (index - currentIndex) * angleIncrement + angleIncrement / 2;
            const opacity = Math.abs(angle) > 90 ? 0 : 1;

            $(this).css({
                transform: `rotateY(${angle}deg)`,
                opacity: opacity
            });
        });
    }

    carousel.on('wheel', function (event) {
        if (scrollingEnabled) {
            event.preventDefault();

            currentIndex = (currentIndex - Math.sign(event.originalEvent.deltaY) + images.length) % images.length;
            updateCarousel();
        }
    });

    carousel.on('mouseenter', function () {
        scrollingEnabled = true;
    });

    carousel.on('mouseleave', function () {
        scrollingEnabled = false;
    });

    images.eq(0).css({
        transform: 'rotateY(0deg)',
        opacity: 1
    });




});





