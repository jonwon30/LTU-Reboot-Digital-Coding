const buttons = document.querySelectorAll('button.selection');

const allimages = document.querySelectorAll('main .image-selections .images');

const filterSearch = document.querySelector('input[name="filter"]')

const filterButton = document.querySelector('button.filter-button')

function toggleImages( toggleImagesFunction ) {
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
  } // End of if else statement
} // End of toggleimages function

// toggleActiveClass
function toggleActiveClass ( active ) {
  buttons.forEach(function ( button ) {
    button.classList.remove('active');
  });
  active.classList.add('active');
} // End of toggleActiveClass


// filter button

filterButton.addEventListener('click', function(){

  let inputValue = filterSearch.value;

  let searchTerm =  inputValue.toLowerCase();

    toggleImages ( searchTerm );


      buttons.forEach( function ( button ){
        let dataClass = button.getAttribute('data-class');

          if( dataClass === searchTerm) {

            button.classList.add( 'active');

          } else {

            button.classList.remove ('active');

          } // End of if else statement

          filterSearch.value = "";

  }) // End of for each loop
  
}); // End of filter button event listener


buttons.forEach( function( button ) {

  button.addEventListener('click', function() {

    let dataClass = button.dataset.class;
    toggleImages( dataClass );

    toggleActiveClass( button )

  });
});