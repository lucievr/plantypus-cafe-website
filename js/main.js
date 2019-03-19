//jshint esversion: 6

flatpickr("#date", {
    "locale": {
        "firstDayOfWeek": 1 // start week on Monday
    },
    altInput: true,
    altFormat: "F j, Y",
    dateFormat: "Y-m-d",
    minDate: "today",
    maxDate: new Date().fp_incr(90)
});

flatpickr("#time", {
    enableTime: true,
    noCalendar: true,
    dateFormat: "H:i",
    time_24hr: true,
    minTime: "10:00",
    maxTime: "21:00",
    minuteIncrement: 30
});

//ball follows cursor
const ball = document.querySelector(".ball");

let mouseX = 0;
let mouseY = 0;

let ballX = 0;
let ballY = 0;

let speed = 0.09;

function animate() {
  let distX = mouseX - ballX;
  let distY = mouseY - ballY;
  
  ballX = ballX + (distX * speed);
  ballY = ballY + (distY * speed);
  
  ball.style.left = ballX + "px";
  ball.style.top = ballY + "px";
  
  requestAnimationFrame(animate);
}

animate();

document.addEventListener("mousemove", function (event) {
  mouseX = event.pageX;
  mouseY = event.pageY;
});

$(".navbar-toggler").click(function(){ 
    setTimeout(function(){ 
        $(".navbar-collapse").removeClass("show"); 
    }, 3000); 
});




// $(document).scroll (function () {
//     let heightNavbar = $(".navbar").height();     //get height property
//     let userPosition = $(window).scrollTop();       //find out where the user has scrolled to
//     //sticky top line or not sticky
//     if (userPosition > (heightNavbar / 10)) {
//         $(".navbar").addClass("sticky");
//     } else {
//         $(".navbar").removeClass("sticky");
//     }
// });

//navigation to sections
$("a.nav-link").click(function () {
    let sectionId = $(this).attr("href");      
    //looking for a anchor tag inside class menu ul li; return attribute value of href id (e.g. booking, contact etc.)
    let sectionPosition = $(sectionId).offset().top;                        //figure out position of section Id from top
    let menuHeight = $(".navbar").height();

    if($(".navbar").hasClass("sticky")) {
        $("html").animate({
            scrollTop: sectionPosition - (menuHeight * 1)
        });
    } else {
        $("html").animate({
            scrollTop: sectionPosition - (menuHeight * 2)   //when user on top before scrolling down (menu not sticky), needs to add menu height once more
        });
    }
});

$("a.nav-link").click(function (event) {
    event.preventDefault();
});  
                                           //to prevent default behaviour of anchor tags, the #contact, #booking etc will disappear from the search bar/url
//gradual display of containers
$(window).scroll(function(){

    //zbavit se chyby kterou hlasi console, obalit to cele do ifu, jeden element neni hidden a hned to nascrollujeme dolu tak hlasilo chybu
  if ($(".hidden").length > 0) {                                

      var userPosition = $(window).scrollTop();
      //console.log(aktualniPoziceUzivatele);
      var elementPosition = $(".hidden").first().offset().top;
      //console.log(poziceElementuVDokumentu);
      var windowHeight = $(window).height();
      //console.log(vyskaOkna);
      var sectionHeight = $(".hidden").first().height();
      //console.log(vyskaSekce);
  
      var vypocet = elementPosition + (sectionHeight/2);
      //console.log("vypocet: " + vypocet);
      var hranice = userPosition + windowHeight;
      //console.log("hranice: " + hranice);
      if (vypocet <= hranice) {                               //is half of the element visible already?
          $(".hidden").first().removeClass("hidden");
      } else if ((windowHeight/2) + userPosition >= elementPosition) {   //prekrocil element 1/2 stranky?
          $(".hidden").first().removeClass("hidden");
      }
  }
});

// click on Top button to scroll up
$("#backToTop").click(function () {
    $("html").animate({
        scrollTop: 0
    }, 2000);
});

$(window).scroll(function () {
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
        {src: "img/breakfast1.jpg"},
        {src: "img/breakfast2.jpg"},
        {src: "img/breakfast3.jpg"},
        {src: "img/breakfast4.jpg"},
    ],
    transition: 'slideLeft2',
    animation: 'random'
});

$(".vegas-container.lunch").vegas({
    slides: [
        {src: "img/lunch1.jpg"},
        {src: "img/lunch2.jpg"},
        {src: "img/lunch3.jpg"},
        {src: "img/lunch4.jpg"},
        {src: "img/lunch5.jpg"},
    ],
    transition: 'slideRight2',
    animation: 'random'
});


$(".vegas-container.drinks").vegas({
    slides: [
        {src: "img/drink1.jpg"},
        {src: "img/drink2.jpg"},
        {src: "img/drink3.jpg"},
        {src: "img/drink4.jpg"},
    ],
    transition: 'slideLeft2',
    animation: 'random'
});