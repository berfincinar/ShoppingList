$(document).ready(function(){

  //LİSTEYE YENİ BİR ÖĞE EKLEME
  // Geri arama işlevini tanımlayın
  var addItem = function() {

    // Giriş metni değerini yakalamak için bir değişken bildirin
    var $input = $('.submission-line__input').val();
    // Giriş metin alanı boş değilse, listeye yeni bir öğe olarak ekleyin
    if ($input) {
      $('.list').prepend('<li class="list__item"><a class="list__delete-btn">X</a>' + $input + '<a class="list__check-btn">✔</a></li>');
    }
    // Giriş metin alanını temizleyin
    $('.submission-line__input').val("");
  };

  //"Ekle" düğmesini tıklayarak listeye yeni bir öğe ekleyin
  $('.submission-line__btn').on('click', function(event){
    // (form gönderme düğmesi istenmeyen varsayılan eylemi engeller)
    event.preventDefault();
    // run the callback function
    addItem();
  });

  // "Enter" tuşuna basarak listeye yeni bir öğe ekleyin
  $('.submission-line__input').keypress(function(event){
    if (event.which === 13) {
      // geri arama işlevini çalıştır
      addItem();
    }
  });

//LİSTEDEN BİR ÖĞE SİLME

  // Bir öğenin sil düğmesine tıklamak:
  $('.list').on('click', '.list__delete-btn', function(){
    //o öğeyi listeden kaldırır
    $(this).parent().fadeOut(300, function(){
      $(this).remove();
    });
  });

  //Tüm Ürünleri Silme 
 
  $(document).ready(function(){
    $(".deleteAll__btn").click(function(){
      $(".list").empty();
    });
  });

// LİSTEDEN BİR ÖĞEYİ KONTROL ETMEK

  //Bir öğenin kontrol düğmesine tıklamak:
  $('.list').on('click', '.list__check-btn', function(event){
    //her şeyi grileştirir
    $(this).parent().toggleClass('list__item--checked');
    $(this).siblings().toggleClass('list__delete-btn--checked');
    $(this).toggleClass('list__check-btn--checked');

    //öğeyi listenin en altına veya en üstüne taşır
    var $listItem = $(this).parent();
    if ($listItem.hasClass('list__item--checked')) {
      $('.list').append($listItem);
    } else {
      $('.list').prepend($listItem);
    }
  });

// LİSTE ÖĞELERİNİ TAŞINABİLİR YAPMA

  $('.list').sortable({
      distance: 2,
      revert: 300,
      cancel: ".list__item--checked"
  });

});