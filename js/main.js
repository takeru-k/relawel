$(function () {
  $('.js-btn').on('click', function () {        // js-btnクラスをクリックすると、
    $('.l-header__nav, .c-hamburger__line').toggleClass('open'); // メニューとバーガーの線にopenクラスをつけ外しする
  })

});

// toggle
$(function(){
	$('.c-toggle__header').click(function(){
		$(this).toggleClass('selected');
		$(this).next().slideToggle();
	});
});

// 下層ページのheaderの背景を白にする
document.addEventListener("DOMContentLoaded", function () {
  const header = document.querySelector('.l-header');
  const breadcrumb = document.querySelector('.l-header + .c-breadcrumb');

  if (header && breadcrumb) {
    header.style.backgroundColor = '#fff';
  }
});

// .l-block--background の直後が .p-cta のとき、margin-bottom を 0 にする
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.l-block--background').forEach(block => {
    const next = block.nextElementSibling;
    if (next && next.classList.contains('p-cta')) {
      block.style.marginBottom = '0';
    }
  });
});