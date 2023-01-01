$(function() {
    $(window).on("scroll", function() {
        var content_2_title = $(".title-content-2")
        var content_2_jewelry_btn = $(".jewelry-btn-content-2")
        var content_2_image = $(".content-2 img")

        if(window.scrollY >= 100) {
            content_2_title.fadeIn(2000)
            content_2_jewelry_btn.fadeIn(2000)
            content_2_image.fadeIn(2000)
        }
        else {
            content_2_title.hide()
            content_2_jewelry_btn.hide()
            content_2_image.hide()
        }
    })

    setInterval(function() {
        $(".image-slider").animate({right: "1000px"}, 500, function() {
            $(".image-slider img:first-child").appendTo(".image-slider");
            $(".image-slider").css("right", "0");
        });
     }, 3000);
})
