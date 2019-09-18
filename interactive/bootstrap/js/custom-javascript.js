/*!
  * Custom javascript for the plea bargains project
	  */

        var app = app || {

          init: function(){

            app.share();

          },

          share: function(){

            $(".fa-twitter").on("click", function(){

              var tweet = "Would you plead guilty? Not only guilty defendants enter pleas, too often innocent defendants do so as well."; //Tweet text
              var url = "http://cnsmaryland.org/interactives/spring-2018/would-you-plead/index.html"; //Interactive URL

              var twitter_url = "https://twitter.com/intent/tweet?text="+tweet+"&url="+url+"&tw_p=tweetbutton";
              window.open(twitter_url, 'mywin','left=200,top=200,width=500,height=300,toolbar=1,resizable=0'); return false;

            });


            $(".fa-facebook-square").on("click", function(){

              var picture = "xxx"; //Picture URL
              var title = "Would you plead guilty?"; //Post title
              var description = "Not only guilty defendants enter pleas, too often innocent defendants do so as well."; //Post description
              var url = "http://cnsmaryland.org/interactives/spring-2018/would-you-plead/index.html"; //Interactive URL

                var facebook_url = "https://www.facebook.com/dialog/feed?display=popup&app_id=310302989040998&link="+url+"&picture="+picture+"&name="+title+"&description="+description+"&redirect_uri=http://www.facebook.com";
              window.open(facebook_url, 'mywin','left=200,top=200,width=500,height=300,toolbar=1,resizable=0'); return false;

            });

          }

        }


        $(document).ready(function(){

          app.init();

        });






    //SHOW AND HIDE


    $("#splash-button").click(function(){
      $(".splash").hide();
      $(".container").show();
      window.scrollTo(0,0);
    });

      $("#plea-button-click").click(function(){
        $(".slide-text").hide();
        $("#take-plea-button").hide();
        $("#trial-button").hide();
        $(".answer-slide").show();
        $(".take-plea-text").show();
        $(".trial-text").hide();
        $(".slide-sub-title-plea").show();
        $(".slide-sub-title-trial").hide();
        window.scrollTo(0,0);
    //    $("body").addClass("loaded-purple");
    //    $("body").removeClass("loaded-grey");
    //    $("body").removeClass("loaded-black");
      });

      $("#trial-button-click").click(function(){
        $(".slide-text").hide();
        $("#take-plea-button").hide();
        $("#trial-button").hide();
        $(".answer-slide").show();
        $(".take-plea-text").hide();
        $(".trial-text").show();
        $(".slide-sub-title-trial").show();
        $(".slide-sub-title-plea").hide();
        window.scrollTo(0,0);
    //    $("body").addClass("loaded-grey");
    //    $("body").removeClass("loaded-purple");
    //    $("body").removeClass("loaded-black");
      });

      $("#prev-button").click(function(){
        $(".slide-text").show();
        $("#take-plea-button").show();
        $("#trial-button").show();
        $(".answer-slide").hide();
        $(".take-plea-text").show();
        $(".trial-text").hide();
        $(".slide-sub-title-trial").hide();
        $(".slide-sub-title-plea").show();
        window.scrollTo(0,0);
    //    $("body").addClass("loaded-grey");
    //    $("body").removeClass("loaded-purple");
    //    $("body").removeClass("loaded-black");
      });


    //PROGRESSION

        var nxtSlideID = 2;

      function nextSlide(){

        $(".slide-text").show();
        $("#take-plea-button").show();
        $("#trial-button").show();
        $(".answer-slide").hide();
        $(".trial-slide").hide();
      //  $("body").addClass("loaded-black");
      //  $("body").removeClass("loaded-purple");
      //  $("body").removeClass("loaded-grey");

        $.each(data, function(idx, obj) {
          if (obj.id == nxtSlideID) {

          $('.slide-title').html(obj.slideTitle);
          $('.slide-text').html(obj.slideText);
          $('#trial-button-click').html(obj.trialButton)
          $('.take-plea-button-text').html(obj.pleaButtonText);
          $('.trial-button-text').html(obj.trialButtonText);
          $('.trial-text').html(obj.trialText);
          $('.take-plea-text').html(obj.pleaText);
          $('.consequences').html(obj.consequences);
          $('.fact').html(obj.fact);
          window.scrollTo(0,0);
          }
        });

        nxtSlideID++;
        // CHANGE nxtSlideID value TO THE NUMBER OF THE LAST SLIDE PLUS ONE
        if (nxtSlideID == 10) {
          $('#next-button').text("Start Over");
          nxtSlideID = 1;
        }

        else {
          $('#next-button').text("Next Case");
        }


      };
