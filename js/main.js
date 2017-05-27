var objects = [];
var start = 10;

$(document).ready(function(){
  lee_json(0, 50);

});

function lee_json(start, end){
  var obj = [];

  $.getJSON("/products.json", function(products) {

    for (var i = start; (i < products["products"].length && i<end); i++) {
      obj = products["products"][i];
      if(obj["images"].length != 0){
        images = obj["images"][0].src;

      }else{
        images = "img/banner-1.jpg";
      }
      var item = "<div class='large-4 medium-6 small-12 columns product__content align-self-bottom'><div class='product__content__image'><a id='product__detail' onclick='display(\""+obj["title"]+"\");'><img src='"+images+"' alt='banner-1'></a></div><div class='product__content__description'><p class='description__text'>"+obj["title"]+"</p><p class='description__price'>25€</p></div>";

      $("#product__item").append(item);
    }
  });

}

var get_product = function(name) {
    $.getJSON("/products.json", function(products) {
      var item = "";
      var alternatives = "";
      var images = [];

      for (var i = 0; i < products["products"].length; i++) {
        obj = products["products"][i];

        if(obj["title"] === name){
          title = obj["title"];

          if(obj["images"].length != 0){
            image_principal = obj["images"][0].src;
            images = obj["images"];
            item = "<div class='large-6 medium-12 small-12 columns description__image'><img id='description__image__item' src='"+image_principal+"' alt='img-producto'>";
          }else{
              image_principal = "img/banner-1.jpg";
              item = "<div class='large-6 medium-12 small-12 columns description__image'><img id='description__image__item' src='"+image_principal+"' alt='img-producto'></div>";
          }//end if-else
        }//end if
      }//end for

      if(images.length > 0){
        alternatives ="<div class='row images__alternative'>";
        for (var i = 1; i < images.length; i++) {
          alternatives += "<div class='large-4 medium-4 small-4 columns'><img src='"+images[i].src+"' alt='img-alt'></div>";
        }//end for

        alternatives += "</div></div>";
      }//end if

      final_item = item + alternatives + "<div class='large-6 medium-12 small-12 columns description__details'><h5 class='description__details__title'>"+title+"</h5><p class='description__details__price'>25€</p><div class='row description__details__icons'></div><button type='button' class='button description__details__button'>comprar producto</button></div>";

      icons = "<div class='small-12 medium-4 columns'><div class='icons__image'><i class='fa fa-globe icons__image__item' aria-hidden='true'></i></div><span class='icons__text'>envío a todo el mundo</span></div>";
      icons += "<div class='small-12 medium-4 large-4 columns'><div class='icons__image'><i class='fa fa-cc-visa icons__image__item' aria-hidden='true'></i><i class='fa fa-cc-mastercard icons__image__item' aria-hidden='true'></i><i class='fa fa-paypal icons__image__item' aria-hidden='true'></i></div> <span class='icons__text'>pago seguro</span></div>";
      icons += "<div class='small-12 medium-4 columns'><div class='icons__image'><i class='fa fa-truck icons__image__item' aria-hidden='true'></i></div><span class='icons__text'>envío entre 1-5 días</span></div>";

      $(".modal-content__description").append(final_item);
      $(".description__details__icons").append(icons);
    });
}

// $(window).scroll(function(){
//
//    var windowHeight = $(window).scrollTop();
//    var container = $(".product").offset();
//
//    var cont = 10;
//    container = container.top;
//
//    if(windowHeight >= container+100 ){
//      lee_json(start, cont);
//      console.log(start);
//      start +=10;
//    }
// });
