document.addEventListener("DOMContentLoaded", () => {
  // moving letters animation
  $(".ml6 .letters").each(function() {
    $(this).html(
      $(this)
        .text()
        .replace(/([^\x00-\x80]|\w)/g, "<span class='letter'>$&</span>")
    );
  });

  anime
    .timeline({ loop: true })
    .add({
      targets: ".ml6 .letter",
      translateY: ["2em", 0],
      translateZ: 0,
      duration: 750,
      delay: function(el, i) {
        return 50 * i;
      }
    })
    .add({
      targets: ".ml6",
      opacity: 0,
      duration: 1000,
      easing: "easeOutExpo",
      delay: 5000
    });

  // flatpickr widget
  flatpickr("#date", {
    locale: {
      firstDayOfWeek: 1
    },
    altInput: true,
    altFormat: "F j, Y",
    dateFormat: "Y-m-d",
    minDate: "today",
    maxDate: new Date().fp_incr(90)
  });

  document.querySelector(".navbar-toggler").addEventListener("click", () => {
    setTimeout(() => {
      document.querySelector(".navbar-collapse").classList.remove("show");
    }, 3000);
  });

  const navlinks = document.querySelectorAll("a.nav-link");

  $("a.nav-link").click(function() {
    let sectionId = $(this).attr("href");
    let sectionPosition = $(sectionId).offset().top;
    $("html").animate({
      scrollTop: sectionPosition - 57
    });
  });

  for (i = 0; i < navlinks.length; i++) {
    navlinks[i].addEventListener("click", event => {
      event.preventDefault();
    });
  }

  $(window).scroll(function() {
    if ($(".hidden").length > 0) {
      const userPosition = $(window).scrollTop();
      const elementPosition = $(".hidden")
        .first()
        .offset().top;
      const windowHeight = $(window).height();
      const sectionHeight = $(".hidden")
        .first()
        .height();

      const calc = elementPosition + sectionHeight / 2;
      const border = userPosition + windowHeight;

      if (calc <= border) {
        $(".hidden")
          .first()
          .removeClass("hidden");
      } else if (windowHeight / 2 + userPosition >= elementPosition) {
        $(".hidden")
          .first()
          .removeClass("hidden");
      }
    }
  });

  $("h2.menu").mouseover(function() {
    $(".line.menu").addClass("active");
  });
  $("h2.about").mouseover(function() {
    $(".line.about").addClass("active");
  });
  $("h2.team").mouseover(function() {
    $(".line.team").addClass("active");
  });
  $("h2.location").mouseover(function() {
    $(".line.location").addClass("active");
  });
  $("h2.booking").mouseover(function() {
    $(".line.booking").addClass("active");
  });

  $("h2").mouseout(function() {
    $(".line").removeClass("active");
  });

  $("#backToTop").click(function() {
    $("html").animate(
      {
        scrollTop: 0
      },
      2000
    );
  });

  $(window).scroll(function() {
    let userPosition = $(window).scrollTop();
    if (userPosition > 300) {
      $("#backToTop").fadeIn(1000);
    } else {
      $("#backToTop").fadeOut(1000);
    }
  });

  //vegas effect
  $(".vegas-container.breakfast").vegas({
    slides: [
      { src: "/img/breakfast1.jpg" },
      { src: "/img/breakfast2.jpg" },
      { src: "/img/breakfast3.jpg" },
      { src: "/img/breakfast4.jpg" }
    ],
    transition: "slideLeft2",
    animation: "random"
  });

  $(".vegas-container.lunch").vegas({
    slides: [
      { src: "/img/lunch1.jpg" },
      { src: "/img/lunch2.jpg" },
      { src: "/img/lunch3.jpg" },
      { src: "/img/lunch4.jpg" },
      { src: "/img/lunch5.jpg" }
    ],
    transition: "slideRight2",
    animation: "random"
  });

  $(".vegas-container.drinks").vegas({
    slides: [
      { src: "/img/drink1.jpg" },
      { src: "/img/drink2.jpg" },
      { src: "/img/drink3.jpg" },
      { src: "/img/drink4.jpg" }
    ],
    transition: "slideLeft2",
    animation: "random"
  });
});
