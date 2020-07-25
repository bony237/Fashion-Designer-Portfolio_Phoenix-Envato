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
  if (window.innerWidth > 1200) {
    const marginTopCustom = document.querySelector('.icon-place div').offsetHeight - document.querySelector('.icon-place').offsetHeight / 2;
    //console.log(marginTopCustom);
    
    document.querySelector('#collection-group-blocks').style.setProperty('padding-top', `${marginTopCustom/2}px`, 'important');
  }
}