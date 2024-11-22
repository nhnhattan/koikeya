$(document).ready(function () {
    if ($(window).width() <= 739) {
        $("#koimucho_snack").attr("src", "./assets/main-img/koimucho-snack_phone.png");
        $("#karamucho_snack").attr("src", "./assets/main-img/For phone.png");
        $("#go_snack").attr("src", "./assets/gokochi/fOR PHONE go.png");
    } else {
        $("#karamucho_snack").attr("src", "./assets/main-img/karamucho-snack.png");
        $("#koimucho_snack").attr("src", "./assets/main-img/koimucho-snack.png");
        $("#go_snack").attr("src", "./assets/gokochi/gokochi-snack.png");
    }

    $("#snack-go").hover(function () {
        $(".snack_right-fly").css({
            opacity: "1", transform: "scale(1)", "z-index": "2",
        })
        if ($(window).width() <= 739) {
            $(".snack_right-fly").stop().animate({bottom: "85%", left: "0"}, 300);
        } else if ($(window).width() >= 740 && $(window).width() <= 1023) {
            $(".snack_right-fly").stop().animate({bottom: "76%", left: "11%", width: "80%"}, 300);
        } else {
            $(".snack_right-fly").stop().animate({bottom: "87.8%", left: "2%"}, 300);
        }
    }, function () {
        $(".snack_right-fly").css({
            opacity: "0", transform: "scale(0.9)", "z-index": "1",
        })
        $(".snack_right-fly").stop().animate({bottom: "52%"}, 300);
    })

    $("#snack-kara").hover(function () {
        if($(window).width() <= 739) {
            $("#karamucho_snack").attr("src", "./assets/main-img/For phone.png");
        } else {
            $("#karamucho_snack").attr("src", "./assets/main-img/karamucho-snack-open.png");
        }
    }, function () {
        if($(window).width() <= 739) {
            $("#karamucho_snack").attr("src", "./assets/main-img/karamucho-snack_phone.png");
        } else {
            $("#karamucho_snack").attr("src", "./assets/main-img/karamucho-snack.png");
        }
    });

    $("#snack-kara").hover(function () {
        $(".snack_left-fly").css({
            opacity: "1", transform: "scale(1)", "z-index": "2",
        });
        if ($(window).width() <= 739) {
            $(".snack_left-fly").stop().animate({bottom: "94%", left: "0"}, 300);
        } else if ($(window).width() >= 740 && $(window).width() <= 1023) {
            $(".snack_left-fly").stop().animate({bottom: "76%", left: "10%", width: "80%"}, 300);
        } else {
            $(".snack_left-fly").stop().animate({bottom: "88%", left: "-2%"}, 300);
        }
    }, function () {
        $(".snack_left-fly").css({
            opacity: "0", transform: "scale(0.9)", "z-index": "1",
        });
        $(".snack_left-fly").stop().animate({bottom: "52%"}, 300);
    });

    $(".gokochi-bg").hover(function () {
        $(".potato-fade").animate({top: "-16%"}, 500);
        $(".potato-fade").css("transform", "scale(1.005)");
    }, function () {
        $(".potato-fade").animate({top: "6%"}, 100);
        $(".potato-fade").css("transform", "scale(1)");
    });

    $(".koimucho-bg").hover(function () {
        $(".popcorn-fade").stop().animate({top: "-13%"}, 500);
        $(".popcorn-fade").css("transform", "scale(1.005)");
    }, function () {
        $(".popcorn-fade").stop().animate({top: "4%"}, 500);
        $(".popcorn-fade").css("transform", "scale(1)");
    });

    $(".karamucho-bg").hover(function () {
        $(".chili-left_fade").animate({top: "-13%"}, 500);
        $(".chili-left_fade").css("transform", "scale(1.005)");
    }, function () {
        $(".chili-left_fade").animate({top: "6%"}, 100);
        $(".chili-left_fade").css("transform", "scale(1)");
    });

    $("#snack-go").hover(function () {
        if($(window).width() <= 739) {
            $("#go_snack").attr("src", "./assets/gokochi/fOR PHONE go.png");
        } else {
            $("#go_snack").attr("src", "./assets/gokochi/gokochi-snack-open.png");
        }
    }, function () {
        if($(window).width() <= 739) {
            $("#go_snack").attr("src", "./assets/gokochi/gokochi-snack_phone.png");
        } else {
            $("#go_snack").attr("src", "./assets/gokochi/gokochi-snack.png");
        }

    });

    $("#snack-koi").hover(function () {
        if($(window).width() <= 739) {
            $("#koimucho_snack").attr("src", "./assets/main-img/koimucho-snack_phone-open.png");
        } else {
            $("#koimucho_snack").attr("src", "./assets/main-img/koimucho-snack-open.png");
        }
    }, function () {
        if($(window).width() <= 739) {
            $("#koimucho_snack").attr("src", "./assets/main-img/koimucho-snack_phone.png");
        } else {
            $("#koimucho_snack").attr("src", "./assets/main-img/koimucho-snack.png");
        }
    });

    $("#snack-koi").hover(function () {
        $(".snack_mid-fly").css({
            opacity: "1", transform: "scale(1)", "z-index": "2",
        });
        if ($(window).width() <= 739) {
            $(".snack_mid-fly").stop().animate({bottom: "88%", left: "0"}, 300);
        } else if ($(window).width() >= 740 && $(window).width() <= 1023) {
            $(".snack_mid-fly").stop().animate({bottom: "77%", left: "10%", width: "80%"}, 300);
        } else {
            $(".snack_mid-fly").stop().animate({bottom: "88%", left: "-2%"}, 300);
        }
    }, function () {
        $(".snack_mid-fly").css({
            opacity: "0", transform: "scale(0.9)", "z-index": "1",
        });
        $(".snack_mid-fly").stop().animate({bottom: "52%"}, 300);
    })();
});

$(document).ready(async function () {
    if (!localStorage.getItem("language")) {
        localStorage.setItem('language', "vi");
    }

    await ($(".product-package-2").css({opacity: "1"}), $(".snack-bottom").css({opacity: "1"}), $(".product-package").css({opacity: "1"}), $(".snack-bottom").css({opacity: "1"}), $(".product-package-3").css({opacity: "1"}), $(".snack-bottom").css({opacity: "1"})

    )
    await setTimeout(function () {
        $(".snack-fall").css({transform: "translateY(" + 0 + ")"})
    }, 800)

    await setTimeout(function () {
        $(".popcorn-fade").css({opacity: "1"}), $(".chili-left_fade").css({opacity: "1"}), $(".potato-fade").css({opacity: "1"})
    }, 1800)

    await setTimeout(function () {
        $(".img-fire").css({bottom: "0"})
    }, 2400)


})
