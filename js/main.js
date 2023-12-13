document.addEventListener("DOMContentLoaded", function () {
  // accordion-header__btn elementlarini tanlang
  var accordionButtons = document.querySelectorAll(".accordion-header__btn");

  // Har bir accordion-header__btn uchun click hodisasi qo'shing
  accordionButtons.forEach(function (button) {
    button.addEventListener("click", function () {
      var accordionItem = this.closest(".accordion-item");
      var isActive = accordionItem.classList.contains("active");

      document.querySelectorAll(".accordion-item").forEach(function (item) {
        item.classList.remove("active");
      });

      document
        .querySelectorAll(".accordion-header__btn .btn-icon")
        .forEach(function (icon) {
          icon.src = "image/icon-plus.svg";
        });

      if (!isActive) {
        accordionItem.classList.add("active");

        var btnIcon = this.querySelector(".btn-icon");
        btnIcon.src = "image/icon-minus.svg";
      } else {
        accordionItem.classList.remove("active");

        var btnIcon = this.querySelector(".btn-icon");
        btnIcon.src = "image/icon-plus.svg";
      }
    });
  });
});
