const buttons = document.querySelectorAll('button.selection');
const allimages = document.querySelectorAll('main .image-selections .images');


function toggleimages( toggleImagesFunction ) {
  if( toggleImagesFunction === 'all' ) {
    allimages.forEach( function( image ) {
      image.style.display = 'flex';
    });
  } else {
    allimages.forEach( function( image ) {
      if( image.dataset.class === toggleImagesFunction ) {
        image.style.display = 'flex';
      } else {
        image.style.display = 'none';
      }
    });
  }
}

buttons.forEach( function( button ) {
  button.addEventListener('click', function() {
    toggleimages( button.dataset.class );
  });
});