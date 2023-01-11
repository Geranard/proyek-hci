$(function() {
    $(window).on("scroll", function() {
        var content_2_title = $(".title-content-2")
        var content_2_jewelry_btn = $(".title-content-2 button")
        var content_2_image = $(".content-2 img")

        if(window.scrollY >= 300) {
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

    $(document).ready(function() {
        const colors = ["white", "yellow"]
        const types = ["ring", "bracelet", "necklace", "earrings"]

        function chooseCategory(event) {
            $(".choose-gold").hide()
            $(".category-"+event.data.color).css({"display": "flex"})
        }

        function showProduct(event) {
            let productData
            $(".category-"+event.data.color).hide()
            $(".jewelry-"+event.data.color+"-product").css({"display": "flex"})
            $.getJSON("./product.json", function(products) {
                productData = products
            }).done(()=>{
                let temp_color = event.data.color
                let temp_type = event.data.type
                let arr_length = Object.keys(productData[temp_color][temp_type]).length
                $("."+temp_color+"-"+temp_type).css({
                    "display": "flex",
                    "flex-direction": "column",
                    "align-items": "center",
                    "justify-content": "center",
                    "min-height": "100vh"
                })

                $("."+temp_color+"-"+temp_type).append(
                    $("<h1>Here is Our Product</h1>")
                )

                let row = 0

                for(let i=1; i<=arr_length; i++) {
                    let temp_select = temp_color+"-"+temp_type+"-product_"+i

                    if((i-1)%4==0) {
                        row += 1
                        $("."+temp_color+"-"+temp_type).append(
                            $("<div>", {class:"row-"+row})
                        )
                        $(".row-"+(row)).css({
                            "display": "flex",
                            "justify-content": "space-between",
                            "align-items": "center",
                            "width": "80vw",
                            "padding-bottom": "10vh"
                        })
                    }

                    $(".row-"+(row)).append(
                        $("<div>", {class:temp_select})
                    )

                    $("."+temp_select).append(
                        $("<img>", {src:productData[temp_color][temp_type]["product_"+i]["pict"]})
                    )
                    $("."+temp_select).append(
                        "<h4>"+productData[temp_color][temp_type]["product_"+i]["title"]+"</h4>"
                    )

                    $("."+temp_select).css({
                        "display": "flex",
                        "flex-direction": "column",
                        "justify-content": "center",
                        "align-items": "center",
                        "text-align": "center",
                        "padding-left": "1vw",
                        "padding-right": "1vw",
                        "font-size": "1.5vh"
                    })

                    $("."+temp_select+" img").css({
                        "width": "15vw",
                        "radius": "5px"
                    })

                    let maxWidth = window.matchMedia("(max-width: 800px)")
                    if(maxWidth.matches) {
                        $("."+temp_select+" img").css({
                            "width": "50vw",
                            "radius": "5px"
                        })

                        $(".row-"+(row)).css({
                            "display": "flex",
                            "flex-direction": "column",
                            "justify-content": "center",
                            "align-items": "center",
                            "width": "80vw",
                            "padding-bottom": "0vh"
                        }) 
                    }
                }
            })
        }

        for(let i=0; i<2; i++) {
            $("."+colors[i]+"-gold-btn").bind("click", {color:colors[i]}, chooseCategory)

            for(let j=0; j<4; j++) {
                let selector = "."+types[j]+"-"+colors[i]+"-btn"
                $(selector).bind("click", {color:colors[i], type:types[j]}, showProduct)
            }
        }
    })
})

function formValidation() {
    let username = document.getElementById("username").value
    let email = document.getElementById("email").value
    let password = document.getElementById("password").value
    let confirm_pass = document.getElementById("confirm-password").value
    let city = document.getElementById("city").value
    let address = document.getElementById("address").value
    let terms = document.getElementById("terms").checked

    for(let i=0; i<username.length; i++) {
        let alpha = username.charCodeAt(i)
        if(i == 0 && alpha == 32) {
            alert("First character can't be empty space")
            return
        }
        else if(! ((alpha > 64 && alpha < 91) || (alpha > 96 && alpha < 123) || (alpha == 32)) ) {
            alert("Name should be alphabet only!")
            return
        }
        else if(username.length < 3) {
            alert("Name should be longer than 3 characters!")
            return
        }
    }

    if(password != confirm_pass) {
        alert("Password didn't match!")
        return
    }
    else if(password.length < 8) {
        alert("Password should be more than 8 characters!")
        return
    }

    if(city.length < 4) {
        alert("Please insert the right city more than 4 letters!")
    }

    if(address.length < 8) {
        alert("Please insert the right address more than 8 letters!")
    }
    
    if(terms == false) {
        alert("You have to agree to Terms & Conditions.")
        return
    }

    alert("Thank you for being a member, "+username+"!")
}