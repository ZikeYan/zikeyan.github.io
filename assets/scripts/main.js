
function toggle() {
  var menu = document.querySelector('.nav-container-small');
  var button = document.querySelector('.menu-default');
  var slider = document.querySelector('.nav-container');
  if (menu.classList.contains('active')) {
      menu.classList.remove('active');
      button.classList.remove('active');
  } else {
      menu.classList.add('active');
      button.classList.add('active');
  }
  
  if (slider.classList.contains('slide-in')) {
      slider.classList.remove('slide-in');
      slider.classList.add('slide-out');
      
  } else {
      slider.classList.remove('slide-out');
      slider.classList.add('slide-in');
  }
  if (slider.classList.contains('first')) {
      slider.classList.remove('first');
  }
}

function toggleblock(blockId)
{
   var block = document.getElementById(blockId);
   var button = document.getElementById('toggleButton');
   if (block.style.display == 'none') {
    block.style.display = 'block' ;
    button.textContent = '---- Hide ----';
   } else {
    block.style.display = 'none' ;
    button.textContent = '---- Show more ----';
   }
}