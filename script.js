

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
    console.log(myText)
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



    var controllerv = new ScrollMagic.Controller();


    var scaleAnimation = gsap.to('.scaling-element', {
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




});





