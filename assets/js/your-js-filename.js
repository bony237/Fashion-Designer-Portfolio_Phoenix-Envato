/* Menu-sm event*/
var checkMenu = document.querySelector("#btn-menu-sm");
      checkMenu.addEventListener('change', function() {
        document.querySelector('#menu-sm').classList.toggle('d-none');
      });

      

/*AOS library initialisation*/
AOS.init();
