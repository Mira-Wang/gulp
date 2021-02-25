$(function () {
    function setFontSize() {
        let htmlWidth = document.documentElement.clientWidth || document.body.clientWidth
        let htmlDom = document.getElementsByTagName('html').item(0)
        if (htmlWidth <= 750) {
            htmlDom.style.fontSize = htmlWidth / 32 + "px"
        } else {
            htmlDom.style.fontSize = "16px"
        }
    }
    setFontSize()
    window.onresize = function () { setFontSize(); }
})
