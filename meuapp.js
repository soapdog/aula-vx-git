function meleca() {
  console.log("meleca!");
}

function login() {
  $.ajax({
    url: "http://labs.vxcom.me/aula/aula.php",
    dataType: "json",
    method: "GET",
    success: function(data, status, xhr) {
      alert(data.status);
    }
  });
}

$(document).ready(function() {
  $("#botao").click(function() {
    login();
  });
});
