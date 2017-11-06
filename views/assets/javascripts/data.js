
$(document).ready(function () {
  console.log("data");

  //var url = '/user/profiledata';
    $('#id_submit').click(function () {    
    $.ajax( 
    {
      type:'POST',
      url = '/user/profiledata',
      success: function(data) {
        console.log("the real data is below");
        console.log(data);
        alert("I won");
         data.name= $('#id_name').val();
         data.address= $('#id_text').val();
         data.phone= $('#id_phone').val();
         data.serial= $('#id_serial').val();
         data.product= $('#id_product').val();
         data.quantity= $('#id_quantity').val();
         data.rate= $('#id_rate').val();
         data.total= $('#id_total').val();
         data.discount= $('#id_discount').val();
         data.gross= $('#id_gross').val();
         data.ratepercent=$('#id_rate2').val();



        
      },
      error: function(error) {
        console.log("some error happened");
        console.log(error);
        alert("I failed");
      }
   });

});
});
