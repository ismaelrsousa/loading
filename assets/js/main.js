var colors = ["#fff", "#000"]

var divided

var actualColor = 0

$(document).ready(function () {
    var scroll = $(document).scrollTop()
    var bodyHeight = parseInt($("body").css("height"))

    divided = bodyHeight / colors.length

    var lastScroll = 0

    $(document).scroll(function () {
        scroll = $(document).scrollTop()

        if (scroll >= divided && scroll > lastScroll) {
            divided += bodyHeight / colors.length
            actualColor++
            $("body").css("background-color", colors[actualColor])
        }
        if (scroll <= divided && scroll < lastScroll) {
            divided -= bodyHeight / colors.length
            actualColor--
            $("body").css("background-color", colors[actualColor])
        }

        lastScroll = scroll
    })
})