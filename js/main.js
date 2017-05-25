
$(window).scroll(function(){
    // var page;
    //   lee_json(page);
    //   page += 10;
  });

$(document).ready(function(){
  var page = 0;
    lee_json();
  $(window).scroll(function(){
      page = page+10;
    });
});

function lee_json() {

  $.getJSON("/products.json", function(products) {
    var page = 10;


    for (var i = 0; i < products["products"].length && i < page; i++) {
      console.log(page);
      var obj = products["products"][i];
      if(obj["images"].length != 0){
        images = obj["images"][0].src;

      }else{
        images = "img/banner-1.jpg";
      }

      var item = "<div class='large-4 medium-4 small-12 columns product__content'><div class='product__content__image'><a data-toggle='firstModal'><img src='"+images+"' alt='banner-1'></a></div><div class='product__content__description'><p class='description__text'>"+obj["title"]+"</p><p class='description__price'>25€</p></div>";
      var modal= "<div id='firstModal' class='reveal' data-reveal><h2>This is a modal.</h2><button class='close-button' data-close aria-label='Close reveal' type='button'><span aria-hidden='true'>&times;</span></button></div>";


      $("#product__item").append(item);
      $("#product__item").append(modal);
    }

  });

    //  for (var i = 0; i < obj["images"].length; i++) {

        //   var images = obj["images"];

          // if(images == null){
          //     images = obj["images"][0].src;
          //
          // }else{
          //   images = "img/banner-1.jpg";
        //  }
          // console.log(images);
          // console.log("____________________");

            // var item = "<div class='large-4 medium-4 small-12 columns product__content'><div class='product__content__image'><img src='"+images+"' alt='banner-1'></div><div class='product__content__description'><p class='description__text'>"+obj["title"]+"</p><p class='description__price'>25€</p></div>";
            // $("#product__item").append(item);


          // $.each(products["products"], function(key, obj) {
          //     var images = [];
          //     $.each(obj, function(property, value){
          //       if(obj["images"].length != 0){
          //         images = obj["images"][0].src;
          //
          //       }else{
          //         images = "img/banner-1.jpg";
          //       }
          //     });
          //
          //     var item = "<div class='large-4 medium-4 small-12 columns product__content'><div class='product__content__image'><img src='"+images+"' alt='banner-1'></div><div class='product__content__description'><p class='description__text'>"+obj["title"]+"</p><p class='description__price'>25€</p></div>";
          //     $("#product__item").append(item);
          // });

}
