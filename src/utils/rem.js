(function (doc, win) {
    var docEl = doc.documentElement, baseFontSize = 100, designWidth = 375,
        resizeHandler = function () {
            var clientWidth = docEl.clientWidth;
            if (!clientWidth) return;
            docEl.style.fontSize = baseFontSize * (clientWidth / designWidth) + 'px';
        };
    if (!doc.addEventListener) return;
    win.addEventListener('resize', resizeHandler, false);
    doc.addEventListener('DOMContentLoaded', resizeHandler, false);
})(document, window);