function handleEvent() {
  window.onscroll = function () {
    const header = document.querySelector(".header");
    header.style.transition = "all linear 0.3s";
    if (window.scrollY > 0) {
      header.style.boxShadow = "0px 1px 3px 1px rgb(0 0 0 / 3%)";
      header.style.backgroundColor = "#1e1e25";
    } else {
      header.style.boxShadow = "unset";
      header.style.backgroundColor = "transparent";
    }
  };
  var main = document.querySelector(".main");
  var overlay = document.querySelector(".overlay");
  var headerNav = document.querySelector(".header-nav");
  var navBar = document.querySelector(".header-nav-bars-icon");
  var navItem = document.querySelectorAll(".header-nav-link");
  var navActive = document.querySelector(".header-nav-link.active");
  var line = document.querySelector(".header-nav-list .line");
  line.style.left = navActive.offsetLeft + "px";

  navItem.forEach((item) => {
    item.onclick = function () {
      navActive.classList.remove("active");
      line.style.width = this.offsetWidth + "px";
      line.style.left = this.offsetLeft + "px";
      this.classList.add("active");
      headerNav.classList.remove("show");
      overlay.classList.remove("show");
    };
  });

  navBar.onclick = function () {
    headerNav.classList.toggle("show");
    overlay.classList.toggle("show");
  };
  overlay.onclick = function () {
    headerNav.classList.remove("show");
    overlay.classList.remove("show");
  };
  window.onresize = function () {
    if (main.clientWidth > 996) {
      headerNav.classList.remove("show");
      overlay.classList.remove("show");
    }
  };
}
handleEvent();
