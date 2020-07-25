document.addEventListener('DOMContentLoaded', function(){
  /* Menu-sm event*/
  var checkMenu = document.querySelector("#btn-menu-sm");
  checkMenu.addEventListener('change', function() {
    document.querySelector('#menu-sm').classList.toggle('d-none');
  });



  /*AOS library initialisation*/
  AOS.init();


  /* Responsiveness tracker (iterations) */

  // collection Section margin-top

  trackResponsivenessUpTo1200();

  window.onresize = () => {
  trackResponsivenessUpTo1200();
  };

  function trackResponsivenessUpTo1200 () {
     
    if(window.innerWidth >= 576) {

      var marginTopCustom = parseInt(document.querySelector('#collection-group-blocks-gt-sm .icon-place div').offsetHeight) - parseInt(document.querySelector('#collection-group-blocks-gt-sm .icon-place').offsetHeight);
    }
    else {
      
      //document.querySelector('#collection-group-blocks-gt-sm').style.margin = 'auto';*/
      //swiperCollection_gt_sm.spaceBetween = 0;
      var marginTopCustom = parseInt(document.querySelector('#collection-group-blocks-gt-sm .icon-place div').offsetHeight) - 30;
    }

    document.querySelector('#collection-group-blocks-gt-sm').style.setProperty('padding-top', `${marginTopCustom}px`, 'important');
    
  }

});

/**Swiper code
   * for slide on collection SECTION
   */


  // Swiper for screen greater than sm
  var swiperCollection_gt_sm = new Swiper('.swiper-container-gt-sm', {
    loop: true,
    
    slidesPerView: 1,
    spaceBetween: 150,
    direction: 'horizontal',

    breakpoints: {
      576: {
        slidesPerView: 2,
        spaceBetween: 50,
      },
      968: {
        slidesPerView: 3,
        spaceBetween: 50,
      }
    },

    navigation: {
      nextEl: '.custom-swiper-button-next',
      prevEl: '.custom-swiper-button-prev',
    },

  });


  // Swiper for screen lower than sm
