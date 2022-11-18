(function () {
  'use strict';

  document.addEventListener("DOMContentLoaded", function () {
    var imageObserver = new IntersectionObserver(function (entries, imgObserver) {
      entries.forEach(function (entry) {
        var lazyImage = entry.target;
        lazyImage.src = lazyImage.dataset.sursa;
        lazyImage.classList.remove("inca-ceva");
        imgObserver.unobserve(lazyImage);
      });
    });
    var arr = document.querySelectorAll(".inca-ceva");
    arr.forEach(function (v) {
      imageObserver.observe(v);
    });
  });

}());
//# sourceMappingURL=bundle.js.map
