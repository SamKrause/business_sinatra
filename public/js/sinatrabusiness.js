$(document).ready(function(){

 startingPoint();
 function startingPoint(){
   console.log("startingPoint firing");
   $('.productBox').hide();

   $('#products').click(function(){
     $('.productBox').slideDown("slow")
   })
 };

 $('.modal-link').click(function(e){
    e.preventDefault();
    $.get($(this).attr("href"), function(recipe){
      console.log(recipe);
      var modal = $('#modal-appear');
      modal.html(recipe);
    });
    // var link_number = $(e.currentTarget);


    // var modal_number = link_number.data("number");

    // selectModal(modal_number);

    // var modal = $('#modal-appear');
    // modal.html(modal_html);

    $('#outer-box').show();
  });

  $('#outer-box').click(function(){
    $('#outer-box').hide();
  });

});

// function selectModal(modal_number){
//   if (modal_number == 1) {
//     modal_html = $("div.modal-1").html()
//   } else if (modal_number == 2) {
//     modal_html = $("div.modal-2").html();
//     console.log("modal 2")
//   } else {
//   modal_html = $("div.modal-3").html()
//   };
// };
