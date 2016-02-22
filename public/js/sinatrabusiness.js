$(document).ready(function(){

 startingPoint();
 function startingPoint(){
   console.log("startingPoint firing");
   $('.productBox').hide()

   $('#products').click(function(){
     $('.productBox').slideDown("slow")
   })
 }





})
