$(function () {
  $(".js-btn").on("click", function () {
    // js-btnクラスをクリックすると、
    $(".l-header__nav, .c-hamburger__line").toggleClass("open"); // メニューとバーガーの線にopenクラスをつけ外しする
  });
});

// toggle
$(function () {
  $(".c-toggle__header").click(function () {
    $(this).toggleClass("selected");
    $(this).next().slideToggle();
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const header = document.querySelector(".l-header");

  window.addEventListener("scroll", function () {
    if (window.scrollY > 0) {
      header.classList.add("is-scrolled");
    } else {
      header.classList.remove("is-scrolled");
    }
  });
});

// .l-block--background の直後が .p-cta のとき、margin-bottom を 0 にする
document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".l-block--background").forEach((block) => {
    const next = block.nextElementSibling;
    if (next && next.classList.contains("p-cta")) {
      block.style.marginBottom = "0";
    }
  });
});

//accordion
const items = document.querySelectorAll(".accordion button");

items.forEach((item, index) => {
  // 各ボタンにユニークなIDを生成して設定
  item.setAttribute("id", `accordion-button-${index + 1}`);

  item.addEventListener("click", function () {
    const isExpanded = this.getAttribute("aria-expanded") === "true";
    this.setAttribute("aria-expanded", !isExpanded);
  });
});
