//jshint esversion: 6

document.addEventListener("DOMContentLoaded", () => {
  //moving letters animation
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
      translateY: ["1.5em", 0],
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

  //ball follows cursor
  // const ball = document.querySelector(".ball");

  // let mouseX = 0;
  // let mouseY = 0;

  // let ballX = 0;
  // let ballY = 0;

  // let speed = 0.09;

  // function animate() {
  //   let distX = mouseX - ballX;
  //   let distY = mouseY - ballY;

  //   ballX = ballX + (distX * speed);
  //   ballY = ballY + (distY * speed);

  //   ball.style.left = ballX + "px";
  //   ball.style.top = ballY + "px";

  //   requestAnimationFrame(animate);
  // }

  // animate();

  // document.addEventListener("mousemove", function (event) {
  //   mouseX = event.pageX;
  //   mouseY = event.pageY;
  // });

  //flatpick widget
  flatpickr("#date", {
    locale: {
      firstDayOfWeek: 1 // start week on Monday
    },
    altInput: true,
    altFormat: "F j, Y",
    dateFormat: "Y-m-d",
    minDate: "today",
    maxDate: new Date().fp_incr(90)
  });

  //lines animation
  const headings = document.querySelectorAll("h2");
  const lines = document.querySelectorAll(".line");

  for (i = 0; i < headings.length; i++) {
    headings[i].addEventListener("mouseover", () => {
      for (j = 0; j < lines.length; j++) {
        lines[j].classList.add("active");
      }
    });
  }

  for (i = 0; i < headings.length; i++) {
    headings[i].addEventListener("mouseout", () => {
      for (j = 0; j < lines.length; j++) {
        lines[j].classList.remove("active");
      }
    });
  }

  //hide menu options after 3 seconds when user clicks on hamburger menu
  document.querySelector(".navbar-toggler").addEventListener("click", () => {
    setTimeout(() => {
      document.querySelector(".navbar-collapse").classList.remove("show");
    }, 3000);
  });

  const navlinks = document.querySelectorAll("a.nav-link");

  //navigation to sections
  $("a.nav-link").click(function() {
    //looking for a anchor tag inside class menu ul li; return attribute value of href id (e.g. booking, contact etc.)
    let sectionId = $(this).attr("href");
    //figure out position of section Id from top
    let sectionPosition = $(sectionId).offset().top;
    $("html").animate({
      scrollTop: sectionPosition - 55
    });
  });

  //to prevent default behaviour of anchor tags
  for (i = 0; i < navlinks.length; i++) {
    navlinks[i].addEventListener("click", event => {
      event.preventDefault();
    });
  }

  //gradual display of containers
  $(window).scroll(function() {
    //get rid of the error after scroll
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

      //is half of the element visible already?
      if (calc <= border) {
        $(".hidden")
          .first()
          .removeClass("hidden");

        //does the element cover more than a half?
      } else if (windowHeight / 2 + userPosition >= elementPosition) {
        $(".hidden")
          .first()
          .removeClass("hidden");
      }
    }
  });

  // backtotop button to scroll up
  $("#backToTop").click(function() {
    $("html").animate(
      {
        scrollTop: 0
      },
      2000
    );
  });

  //fadein/fadeout backtotop button
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
      { src: "img/breakfast1.jpg" },
      { src: "img/breakfast2.jpg" },
      { src: "img/breakfast3.jpg" },
      { src: "img/breakfast4.jpg" }
    ],
    transition: "slideLeft2",
    animation: "random"
  });

  $(".vegas-container.lunch").vegas({
    slides: [
      { src: "img/lunch1.jpg" },
      { src: "img/lunch2.jpg" },
      { src: "img/lunch3.jpg" },
      { src: "img/lunch4.jpg" },
      { src: "img/lunch5.jpg" }
    ],
    transition: "slideRight2",
    animation: "random"
  });

  $(".vegas-container.drinks").vegas({
    slides: [
      { src: "img/drink1.jpg" },
      { src: "img/drink2.jpg" },
      { src: "img/drink3.jpg" },
      { src: "img/drink4.jpg" }
    ],
    transition: "slideLeft2",
    animation: "random"
  });
});
