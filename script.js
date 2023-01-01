$(function(){
    $(window).on("scroll", function(){
        var content_2_title = $(".title-content-2")
        var content_2_jewelry_btn = $(".jewelry-btn-content-2")
        var content_2_image = $(".content-2 img")

        if(window.scrollY >= 30) {
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

    // $(".dropdown-menu-btn").click(function(){
    //     var dmc = $(".dropdown-menu-content")
    //     if(dmc.css("display") === "block") {
    //         dmc.css("display", "none")
    //     }
    //     else {
    //         dmc.css("display", "block")
    //     }
    // })
})
