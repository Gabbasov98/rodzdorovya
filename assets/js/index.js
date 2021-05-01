function slidersDesc() {
    var swiper = new Swiper('.desc .swiper-container', {
        speed: 800,
        slidesPerView: 3,
        spaceBetween: 10,
        // autoplay: true,
        loop: true,
        navigation: {
            nextEl: '.desc .swiper-button-next',
            prevEl: '.desc .swiper-button-prev',
        },
        breakpoints: {
            320: {
                slidesPerView: 1,
                spaceBetween: 120
            },
            768: {
                slidesPerView: 2,
                // spaceBetween: 0
            },
            992: {
                slidesPerView: 3,

            },
        }
    })
}

function slidersWhy() {
    var swiper = new Swiper('.why .swiper-container', {
        speed: 800,
        slidesPerView: 4,
        spaceBetween: 10,
        // autoplay: true,
        loop: true,
        navigation: {
            nextEl: '.why .swiper-button-next',
            prevEl: '.why .swiper-button-prev',
        },
        breakpoints: {
            320: {
                slidesPerView: 1,
                spaceBetween: 120
            },
            768: {
                slidesPerView: 2,
                // spaceBetween: 0
            },
            992: {
                slidesPerView: 4,
                // spaceBetween: 0
            },
            // 1150: {
            //     slidesPerView: 4,
            //     // spaceBetween: 0
            // },
        }
    })
}





$(document).ready(function() {
    slidersDesc();
    slidersWhy();

    $("#take-result").click(function() {
        let xRadio = $("input[name='x']:checked").val();
        let yRadio = $("input[name='y']:checked").val();
        let zRadio = $("input[name='z']:checked").val();
        let result = (xRadio * 3000) + (yRadio * 4500) + (zRadio * 35000) - 250000;
        $("#result").html(result);

    })
});