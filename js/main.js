;(function() {
 "use strict";
 var menuToggle = document.querySelector('.ba-menu-toggle'),
         menu = document.querySelector('.ba-main-nav'),
         body = document.body;


     menuToggle.addEventListener('click', function(){
         body.classList.toggle('ba-menu-open');
     });

    /* overlay.addEventListener('click', function(){
         body.classList.toggle('ba-menu-open');
     });*/


})();

