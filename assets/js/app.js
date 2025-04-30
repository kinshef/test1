/******/ (() => { // webpackBootstrap
/*!***********************!*\
  !*** ./src/js/app.js ***!
  \***********************/
document.addEventListener('DOMContentLoaded', function () {
  var mobile = window.innerWidth < 991;
  document.querySelector('#btn_menu').addEventListener('click', function () {
    document.querySelector('.header-main').classList.toggle('open');
  });
  if (mobile) {
    document.querySelectorAll('.header-bottom__naw').forEach(function (item) {
      item.addEventListener('click', function () {
        var _item$nextElementSibl;
        if ((_item$nextElementSibl = item.nextElementSibling) !== null && _item$nextElementSibl !== void 0 && _item$nextElementSibl.classList.contains('header-bottom__submenu')) {
          item.nextElementSibling.classList.toggle('active');
        }
      });
    });
  } else {
    document.querySelectorAll('.header-bottom__submenu').forEach(function (item) {
      item.addEventListener('mouseenter', function () {
        return item.previousElementSibling.classList.add('hover');
      });
      item.addEventListener('mouseleave', function () {
        return item.previousElementSibling.classList.remove('hover');
      });
    });
  }
  document.querySelectorAll('.header-submenu').forEach(function (item) {
    var wraps = item.querySelectorAll('.header-submenu__wrap');
    var navItems = item.querySelectorAll('.header-submenu__naw, .header-submenu__naw2');
    navItems.forEach(function (navItem, index) {
      navItem.addEventListener(mobile ? 'click' : 'mouseenter', function () {
        if (!navItem.classList.contains('header-submenu__naw2') || mobile) {
          wraps.forEach(function (wrap) {
            return wrap.classList.remove('active');
          });
          navItems.forEach(function (nav) {
            return nav.classList.remove('hover');
          });
        }
        var currentWrap = wraps[index];
        if (currentWrap) {
          currentWrap.classList.add('active', 'prev');
          currentWrap.style.height = "".concat(currentWrap.scrollHeight, "px");
        }
        navItem.classList.add('hover');
      });
    });
  });

  // в десктопе(!mobile) убрать изменение высоты, + при click или mouseenter убирать все предыдущие высоты

  document.querySelectorAll('.mobile__prev').forEach(function (button) {
    button.addEventListener('click', function () {
      var submenu = this.closest('.header-bottom__submenu');
      var submenu2 = this.closest('.header-submenu__wrap.prev');
      if (submenu2) {
        var _document$querySelect;
        submenu2.classList.toggle('active');
        submenu2.classList.toggle('prev');
        (_document$querySelect = document.querySelector('.header-submenu__wrap.prev')) === null || _document$querySelect === void 0 || _document$querySelect.classList.add('active');
      } else if (submenu) {
        submenu.classList.toggle('active');
      }
    });
  });
});
/******/ })()
;