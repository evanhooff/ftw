(function () {
    window.addEventListener("mousemove", function (e) {
        var change;
        var xpos = e.clientX;
        var ypos = e.clientY;
        var left = change * 20;
        var xpos = xpos * 2;
        ypos = ypos * 2;
        const el = document.querySelector(".wulff-head");
        el.style.top = 0 + ypos / 50 + "px";
        el.style.right = 0 + xpos / 80 + "px";
    });
})();