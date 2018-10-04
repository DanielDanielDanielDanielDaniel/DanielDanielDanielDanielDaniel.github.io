// CS top nav blendet nach 300px ein (contact + back)

// $(function() {
//   $(window).on("scroll", function() {
//     if ($(this).scrollTop() > 300) {
//       $(".cs-topnav").css({ top: "0px" });
//     } else {
//       $(".cs-topnav").css({ top: "-60px" });
//     }
//   });
// });

// bodymovin icon animations

var animation = bodymovin.loadAnimation({
  container: document.getElementById('world'),
  renderer: 'svg',
  loop: true,
  autoplay: true,
  path: 'img/world2.json'
});

var animation = bodymovin.loadAnimation({
  container: document.getElementById('bm'),
  renderer: 'svg',
  loop: true,
  autoplay: true,
  path: 'img/render_5.json'
});

var animation = bodymovin.loadAnimation({
  container: document.getElementById('bm2'),
  renderer: 'svg',
  loop: true,
  autoplay: true,
  path: 'img/render_9.json'
});
var animation = bodymovin.loadAnimation({
  container: document.getElementById('bm6'),
  renderer: 'svg',
  loop: true,
  autoplay: true,
  path: 'img/render_6.json'
});
var animation = bodymovin.loadAnimation({
  container: document.getElementById('bm7'),
  renderer: 'svg',
  loop: true,
  autoplay: true,
  path: 'img/render_7.json'
});

// var animation = bodymovin.loadAnimation({
//   container: document.getElementById('bm2'),
//   renderer: 'svg',
//   loop: true,
//   autoplay: true,
//   path: 'img/render_2.json'
// });

// top logo verschwindet nach click

$(document).ready(function(){
    $("#logo").click(function()
    { $(this).css({ opacity: "0", zIndex : "0"});
  });  
});

$(document).ready(function(){
    $("#logo2").click(function()
    { $(this).css({ opacity: "0", zIndex : "0"});
  });  
});

$(document).ready(function(){
    $("#logo").click(function()
    { $("#logo2").css({ opacity: "1", zIndex : "1"})
  });  
});

$(document).ready(function(){
    $("#logo2").click(function()
    { $("#logo").css({ opacity: "1", zIndex : "1"});
  });  
});


// top logo erscheint wieder nach hochscrollen

$(function() {
  $(window).on("scroll", function() {
    if ($(this).scrollTop() > 100) 
    { $("#logo").css({ opacity: "0" }); } 
    else 
    { $("#logo").css({ opacity: "1" }); }
  });
});

$(function() {
  $(window).on("scroll", function() {
    if ($(this).scrollTop() > 100) 
    { $("#logo2").css({ opacity: "0" }); } 
    else 
    { $("#logo2").css({ opacity: "0" }); }
  });
});

// Arrow verschwindet nach click

$(document).ready(function(){
    $("#arrow").click(function()
    { $(this).css({ opacity: "0" }); 
  });  
});

// Arrow soll runterscrollen auf click

// $(document).ready(function(){
//   $(".scroll").click(function(event) {
//     event.preventDefault();
//       $('html, body').animate( { scrollTop:$(this.hash).offset().top } , 1000);
//   });
// });

// var top = ($('.scroll').offset() || { "top": NaN }).top;
// if (isNaN(top)) {
//     alert("something is wrong, no top");
// } else {
//     alert(top);
// }

// Arrow verschwindet nach 300px scroll

$(function() {
  $(window).on("scroll", function() {
    if ($(this).scrollTop() > 100) 
    { $("#arrow").css({ opacity: "0" }); } 
    else 
    { $("#arrow").css({ opacity: "1" }); }
  });
});


