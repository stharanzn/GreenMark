$(document).ready(function () {
  $(window).bind("scroll", function () {
    var navHeight = $(window).height() - 100;
    if ($(window).scrollTop() > navHeight) {
      $("nav").addClass("fixed");
      $("#factory").addClass("factoryFixed");
      $("#afforestation").addClass("afforestationFixed")
      $("#factory").addClass("appearAnim")
      $("#afforestation").addClass("appearAnim")
      $("#leaves").addClass("fixedLeaves")
      $("#leaves").removeClass("opacityzero")
      

     
      
    } 
    
    else {
      $("nav").removeClass("fixed");
      $("#factory").removeClass("factoryFixed");
      $("#afforestation").removeClass("afforestationFixed")
      $("#factory").removeClass("appearAnim")
      $("#afforestation").removeClass("appearAnim")
      $("#leaves").removeClass("fixedLeaves")
      $("#leaves").addClass("opacityzero")

      

    }

    // console.log(navHeight)
    // console.log($("#lastSep").scr())
    // if($("#lastSep").scrollTop()>navHeight){
    //   console.log("ok ")
    //   $("#factory").removeClass("factoryFixed");
    //   $("#afforestation").removeClass("afforestationFixed")
    // }
    $(window).scroll(function() {
      var element = $('#lastSep');
      var elementHeight = element.outerHeight();
      var elementTop = element.offset().top;
      var elementBottom = elementTop + elementHeight;
    
      var viewportTop = $(window).scrollTop();
      var viewportBottom = viewportTop + $(window).height();      
    
      if (elementBottom < viewportTop ) {
        // Element is within viewport
        
        $("#factory").removeClass("factoryFixed");
        $("#afforestation").removeClass("afforestationFixed")
        
      } else {
        // Element is outside viewport
        
        
      }
    });

  });
});

$('body').animate({
  scrollTop: "+=100"
}, 1000); // scroll for 1 second


// window.scrollBy({ 
//   top: 10, // could be negative value
//   left: 0, 
//   behavior: 'smooth' 
// });

// window.scrollBy(0, 1)

export function popupToast(_message, _status = "info"){
  let popup = `
      <div class="toast ${_status}">${_message}.</div>
      `
      let toasterDiv = document.getElementById('toaster')
      toasterDiv.style.transition = "1s all ease !important"
      toasterDiv.innerHTML = popup;
  setTimeout(() => {
      const elem = document.getElementById('toaster');
      elem.innerHTML = "";
  }, 4000);
  
}