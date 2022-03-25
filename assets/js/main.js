document.addEventListener('DOMContentLoaded', function () {
  var elms = document.getElementsByClassName( 'splide' );
  var commonOptions = {};

  for ( var i = 0; i < elms.length; i++ ) {
    new Splide( elms[ i ] ).mount();
  }
});