document.addEventListener('DOMContentLoaded', function () {
  var elms = document.getElementsByClassName( 'splide' );
  var elmsIdNotInclude = ['product-gallery', 'product-thumbnails'];

  for ( var i = 0; i < elms.length; i++ ) {
    if ( !elmsIdNotInclude.includes(elms[ i ].id) ) {
      new Splide( elms[ i ] ).mount();
    }
  }

  //
  var elProductGallery = document.getElementById('product-gallery');
  var elProductThumbnails = document.getElementById('product-thumbnails');

  if ( elProductGallery && elProductThumbnails ) {
    var productGallery = new Splide( elProductGallery );
    var productThumbnails = new Splide( elProductThumbnails );
    productGallery.sync( productThumbnails );
    productGallery.mount();
    productThumbnails.mount();
  }
});