$(document).ready(function () {
  console.log("data");

  
    $('#id_submit').click(function () {    
    $.ajax( 
    {
      type:'POST',
      url = '/login/logindata',
      success: function(data) {
      alert("I won");
      data.email= $('#id_email').val();
      data.password= $('#id_password').val();
  },
  error: function(error) {
        console.log("some error happened");
        console.log(error);
        alert("I failed");
      }
  });