document.addEventListener('DOMContentLoaded', () => {

  const header = document.querySelector('.header');
  window.onscroll = () => {
    if (window.pageYOffset > 100) {
      header.classList.add("sticky");
    } else {
      header.classList.remove("sticky");
    }
  };

  const burger = document.querySelector('.burger');
  const body = document.querySelector('body')
  const menuMobile = document.querySelector('.mobile-nav');
  const closeBurger = document.querySelector('.close-burger');

  burger.addEventListener('click', () => {
    burger.classList.add('burger--active');
    menuMobile.classList.add('active');
    body.classList.add('lock');
  });

  closeBurger.addEventListener('click', () => {
    burger.classList.remove('burger--active');
    menuMobile.classList.remove('active');
    body.classList.remove('lock');
  });

  document.addEventListener('click', function (e) {
    if (e.target !== burger && e.target !== menuMobile && e.target !== closeBurger) {
      body.classList.remove('lock');
      menuMobile.classList.remove('active');
      burger.classList.remove('burger--active');
    };
  });

  const filterBtns = document.querySelectorAll(".portfolio-nav__btn");
  const grid = document.querySelector(".portfolio-list");

  filterBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      // remove active class from all buttons
      filterBtns.forEach((filterBtn) => {
        filterBtn.classList.remove("active");
      });
      // add active class to clicked button
      btn.classList.add("active");

      // get the filter value from the clicked button
      const filterValue = btn.getAttribute("data-filter");

      // filter the grid items based on the filter value
      for (const item of grid.children) {
        if (filterValue === "all") {
          // item.style.display = "block";
          item.classList.remove('hide');
          item.classList.add('show');
        } else if (item.classList.contains(filterValue)) {
          // item.style.display = "block";
          item.classList.remove('hide')
          item.classList.add('show')
        } else {
          // item.style.display = "none";
          item.classList.remove('show')
          item.classList.add('hide')
        }
      }
    });
  });

  /*================================*/

  const anchors = document.querySelectorAll('a[href*="#"]')

  for (let anchor of anchors) {
    anchor.addEventListener('click', function (e) {
      e.preventDefault()

      const blockID = anchor.getAttribute('href').substr(1)

      document.getElementById(blockID).scrollIntoView({
        inline: 'nearest',
        behavior: 'smooth',
        block: 'start'
      })
    })
  }

});