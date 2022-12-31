$(function(){
    $(window).on("scroll", function(){
        var product_1 = $(".product-show1")
        if(window.scrollY >= 20 && window.scrollY <= 90) {
            product_1.hide()
            product_1.fadeIn(2000)
        }
        // product_1.ready(function(){
        //     if(window.scrollY >= 20 && window.scrollY <= 80) {
        //         product_1.hide()
        //         product_1.fadeIn(4000)
        //     }
        // })
    })
})
