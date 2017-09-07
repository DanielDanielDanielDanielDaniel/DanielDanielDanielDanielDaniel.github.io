/* 
  Hackerbay
*/
/* Disable Click on currentLink */
$('.currLink').click(function(event){
    event.preventDefault();
    return false;
});


//Call back for PNGs for non-supporting SVG devices.
if (!Modernizr.svg) {
  $('img[src*="svg"]').attr('src', function() {
      return $(this).attr('src').replace('.svg', '.png');
  });            
}  


$(document).on("load", function () {
    utils.winWidth = document.documentElement.clientWidth;
    utils.winHeight = document.documentElement.winHeight;  
});




$("#incompleteSite").on('click',function(){
  TweenMax.to("#incompleteSite",0.3,{autoAlpha:0})
});

$(document).ready(function() {

    if( $('html').hasClass('homePage')){
      TweenMax.to('header',0.5,{autoAlpha:1,ease:Power1.easeInOut});  
      TweenMax.to('nav',0.6,{delay:0.4,autoAlpha:1,ease:Power1.easeInOut});
    }
    
    TweenMax.to('.heroBanner, #mainContent',0.8,{delay:1,autoAlpha:1,ease:Power1.easeInOut});


    $('#navMobileLinks').append($('footer').clone().html());

    function initAndResizeStuffs(){
        if(utils.winWidth<650){
          $('#hamburgar,#navMobileLinks').attr('aria-hidden','false');
          TweenMax.set("nav", {x:"100%"});
        }else{
          TweenMax.set("nav", {x:"0%"});
        }


    }

    initAndResizeStuffs();


    $(window).on("resize", function () {
        utils.winWidth = document.documentElement.clientWidth;
        utils.winHeight = document.documentElement.clientWidth;  

        initAndResizeStuffs();
    });

    var controller = new ScrollMagic.Controller();
    function setSMAnim(tweenArray,triggerElement,triggerHook,dur,funcOnStart){
      var tweenQuote = new TimelineMax();
          tweenQuote.add(tweenArray);


        new ScrollMagic.Scene({
              triggerElement: triggerElement,
              triggerHook: triggerHook,
              duration:dur
          })
          //.addIndicators()
          .setTween(tweenQuote)
          .addTo(controller)
          .on('start', funcOnStart)
    }

    var headerTrigger = '#homeServices', headerTriggerDur = 0.7;

    if(!$("html").hasClass("homePage")){
      headerTrigger = '#mainContent';
      headerTriggerDur = -0.1
    }

    setSMAnim(
      [ 
        TweenMax.to("nav a", 0.1, {top:"-2.8em",ease:Power1.easeInOut}),
        TweenMax.to("nav li", 0.1, {height:"1em",ease:Power1.easeInOut}),
        TweenMax.to("nav", 0.1, {y:18,ease:Power1.easeInOut}),
        TweenMax.to("header", 0.1, {y:-20,ease:Power1.easeInOut}),
        TweenMax.to("header img", 0.1, {scale:0.8,transformOrigin:"left center",ease:Power1.easeInOut}),
        TweenMax.to("header h1", 0.1, {top:"25px",scale:0.9,ease:Power1.easeInOut}),
        TweenMax.to("#hamburgar", 0.1, {top:"25px",ease:Power1.easeInOut})
        
      ],
      headerTrigger,
      headerTriggerDur
    );


    $('.fadeIns').each(function(){
        setSMAnim(
          [ 
            TweenMax.from(this, 0.3, {autoAlpha:0,ease:Power1.easeInOut}) 
          ],
          this,
          0.9,
          0
        );
    })

    //Mobile
    if(utils.winWidth<700){
        function initHomeMobileSVGImgAnim(){
          setSMAnim(
            [ 
              TweenMax.to("#homeServiceImg", 1, {y:"20%",ease:Power1.easeInOut})
            ],
            "#homeServices",
            0.7,
            "600%"
          );
        }
        if($('#homeServiceImg').index!==-1){
          initHomeMobileSVGImgAnim();
        }else{
          setTimeout(function(){
            initHomeMobileSVGImgAnim()
          },1000)
        }
        
    }


    function homeServiceTextAnim(id){
        setSMAnim(
          [
            TweenMax.fromTo(id, 0.6 , {scaleY:0,autoAlpha:0},{scaleY:1,autoAlpha:1,ease:Power4.easeInOut}),
            TweenMax.fromTo(id+" a", 0.7 , {autoAlpha:0},{delay:0.6, autoAlpha:1,ease:Power4.easeInOut})
          ],
          id,
          0.9,
          0
        ); 
    }

    if($('html').hasClass("homePage")){
        homeServiceTextAnim("#homeAdapt")
        homeServiceTextAnim("#homeDesign")
        homeServiceTextAnim("#homeBuild")
        homeServiceTextAnim("#homeLaunch")
        homeServiceTextAnim("#homeEvolve")
    }

    if($('html').hasClass("servicePg")){
      TweenMax.set(['.serviceListSVGOutLine','.serviceListSVG text','.serviceSVG2','.serviceSVG1','.serviceListSVGSmall polygon'],{autoAlpha:0})


      setTimeout(function(){

          var tl = new TimelineMax();

          tl
            .add(
              TweenMax.fromTo(".serviceListSVGOutLine", 0.5 , 
                {scale:0},
                {scale:1,autoAlpha:1, ease: Back.easeInOut}
              ),
              0
            )
            .add(
              TweenMax.to(".serviceListSVGText2", 0.4 , 
                {autoAlpha:1, ease: Power3.easeInOut}
              ),
              0.3
            )
            .add(
              TweenMax.staggerFromTo("#serviceListSVGBig .serviceListSVGText", 0.6, 
                { scale:1.2 },
                { autoAlpha:1,delay:0.1,scale:1, ease: Power3.easeInOut},0.1
              ),
              0.7
            )
            .add(
              TweenMax.staggerTo(".serviceSVG1", 0.4, 
                { autoAlpha:1,delay:0.1,ease: Power3.easeInOut},0.1
              ),
              0.7
            )
            .add(
              TweenMax.staggerTo(".serviceSVG2", 0.4, 
                { autoAlpha:1,delay:0.1,ease: Power3.easeInOut},0.1
              ),
              1.2
            )
            .add(
              TweenMax.to(".serviceListSVGSmall polygon", 0.4, 
                { autoAlpha:1,ease: Power3.easeInOut}
              ),
              1.2
            )
            .add(
              TweenMax.to(".serviceListSVGSmall .serviceListSVGText", 0.4, 
                { autoAlpha:1,ease: Power3.easeInOut}
              ),
              1.5
            )

      },2000);
    }

    if($('html').hasClass('culturePg')){
      TweenMax.set('#marketCap',{transformOrigin:"center center"})
      setSMAnim(
        [ 
          TweenMax.staggerFromTo('.marketCapCircles', 1.3,
            {autoAlpha:0},
            {delay:0.4,autoAlpha:1},
          0.3),

          TweenMax.staggerFromTo('.marketCapTxt', 1.3,
            {autoAlpha:0},
            {delay:0.4,autoAlpha:1},
          0.3)
        ],
        "#marketCap",
        0.5,
        0
      );
    }

    // var controller2 = new ScrollMagic.Controller();
    // var tweenQuote = new TimelineMax();
    //     tweenQuote.add(
    //       [TweenMax.fromTo($('#homeAdapt .wrap'), 0.8, {autoAlpha:0},{autoAlpha:1,ease:Power1.easeInOut}),
    //     TweenMax.fromTo($('#homeAdapt a'), 0.4 , {autoAlpha:0},{ autoAlpha:1,delay:0.6,ease:Power4.easeInOut})]);


    //  var abcd =  new ScrollMagic.Scene({
    //         triggerElement: "#homeAdapt",
    //         triggerHook: 0.9,
    //         duration:"20%"
    //     })
    //     //.addIndicators()
    //     .setTween(tweenQuote)
    //     .addTo(controller2)


      


    $('#hamburgar').on('click',function(){
          TweenMax.set("nav", {y: "0%"});

          var $this = $(this);

          if(!$this.hasClass('clicked')){
            $this.addClass('clicked').attr('aria-pressed','true');

            TweenMax.to("main,footer",0.5,{x:"-100%", ease:Power1.easeIn,
                onStart:function(){
                  TweenMax.to("nav",0.4, {x: "0%", ease:Power1.easeInOut});        
                },
                onComplete:function(){
                  $('html').css('overflow','hidden');
                }
            });
            
            

          }else{
            $this.removeClass('clicked').attr('aria-pressed','false')

            
            TweenMax.to("nav",0.5, {x:"100%",ease:Power1.easeIn,
                onStart:function(){
                  TweenMax.to("main,footer",0.4,{x:"0%", ease:Power1.easeInOut})      
                },
                onComplete:function(){
                  $('html').css('overflow','auto');
                }
            });
            
          }
    });

    

    $('div.panorama').paver({
      tiltSensitivity: 0.5,
      gyroscopeThrottle: (1400/60),
      mouseSmoothingFunction: 'gaussian',
      panningThrottle:300
    });

    $('.panoramicImgWrap div').paver({
      tiltSensitivity: 0.5,
      gyroscopeThrottle: (1400/60),
      mouseSmoothingFunction: 'gaussian',
      panningThrottle:300
    });

    


    $('.smoothAnchor').on('click',function(e){
      e.preventDefault();

      var href = $(this).attr('href');

      TweenMax.to(['.heroBanner','footer','#mainContent'], 0.5, {autoAlpha:0,
        ease:Power1.easeIn,
        onComplete: function(){
            window.location = href
        }
      });

      return false;
    })





    document.getElementById("contactForm").onsubmit = function() {

/*
      var nameVal= $('#name').val(),
      x=$('#email').val(),
      atpos=x.indexOf("@"),
      dotpos=x.lastIndexOf(".");

    $('.styledLabel').removeAttr('role');

    //Name
    if(nameVal==="" || (!nameVal.match(/^[a-zA-Z\s]+$/)) ){
        $('#name')
        .attr('aria-invalid','true')
        .next('.styledLabel').attr({
          'role':'alert',
          'data-text':'Please enter Name'
        });

        return false;
    }else{
      $('#name').attr('aria-invalid','false');
    }

    //Email
    if(x==""){
        $('#email')
        .attr('aria-invalid','true')
        .next('.styledLabel').attr({
          'role':'alert',
          'data-text':'Please enter email address'
        });
        return false;
    }
    else if(atpos<1 || dotpos<atpos+2 || dotpos+2>=x.length){
        $('#email')
        .attr('aria-invalid','true')
        .next('.styledLabel').attr({
          'role':'alert',
          'data-text':'Please enter correct email address'
        });
        return false;
    }else{
      $('#email').attr('aria-invalid','false');
    }


    //Message
    if($('#message').val() === ''){
        $('#message')
        .attr('aria-invalid','true')
        .next('.styledLabel').attr({
          'role':'alert',
          'data-text':'Please enter message'
        });
        return false;
    }else{
      $('#message').attr('aria-invalid','false');
    }


    //Ajax
    dataString = {
      "name" :$("#name").val(),
      "email": $("#email").val(),
      "message":$("#message").val()
    }

    $('#messageStatus')
    .css("color","#c22085")
    .html('Please Wait, submitting your message')
    .attr({
      'role':'alert'
    });
*/  
    var dataString = {
        "name" :$("#name").val(),
        "email": $("#email").val(),
        "company":$("#email").val(),
        "number":$("#email").val(),
        "message":$("#message").val()
    }

    function resetAllVals(){
        $('input[type="text"],input[type="email"],input[type="tel"], textarea').each(function () { this.value = ''});
    }

    $.ajax({
      url: "https://formspree.io/tobias@hackerbay.com",
      method: "POST",
      data: dataString,
      dataType: "json",
      beforeSend: function() {
            // $contactForm.append('<div class="alert alert--loading">Sending message…</div>');
      },
      success: function(data) {
            console.log(data)

            if(data.success==='email sent'){
              $('#formSubmitStatus')
              .css("color","#c22085")
              .html("Thank You! Your message has been submitted successfully.")
              .attr({
                'role':'alert'
              });

              setTimeout(function(){
                  $('.formSubmitStatus').hide()
              },4000)
            }
            else{
               $('#formSubmitStatus')
               .css("color","#c22085")
               .html("Oops!The mail service seems to be down!<br> you can reach me on <a href='mailto:hello@hackerbay.com'>mailto:hello@hackerbay.com</a>")
               .attr({
                 'role':'alert'
               });
            }
            resetAllVals()

        },
        error: function(data){
          $('#formSubmitStatus')
          .css("color","#c22085")
          .html("Oops!The mail service seems to be down!<br> you can reach me on <a href='mailto:hello@hackerbay.com'>mailto:hello@hackerbay.com</a>")
          .attr({
            'role':'alert'
          });
          resetAllVals()
        }
      });

    
      return false;
    }



    $('a[href="#contact"]').click(function(e){
      e.preventDefault();

      TweenMax.to($('#contact'),0.6,{autoAlpha:1})

      return false;
    });

    $('.contactClose').click(function(e){
      e.preventDefault();

      TweenMax.to($('#contact'),0.6,{autoAlpha:0})

      return false;
    });

    

});

$('.smartListWrapper li').on('click',function(){
  var $this = $(this);

  if($this.hasClass('active')){
    $this.removeClass('active')
  }else{
    //$('.smartListWrapper li.active').removeClass('active')
    $(this).addClass('active');  
  }
  
});

