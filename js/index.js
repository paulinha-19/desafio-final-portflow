$('li a').click(function(e) {
    e.preventDefault();
    $('li a.active').removeClass('active');
    $(this).addClass('active');
});

function openFunction(){
    document.getElementById("menu").style.width="300px";
    document.getElementById("mainbox").style.marginLeft="300px";
    document.getElementById("mainbox").innerHTML="";
   }
  function closeFunction(){
   document.getElementById("menu").style.width="0px";
   document.getElementById("mainbox").style.marginLeft="0px";
   document.getElementById("mainbox").innerHTML="&#9776;";
  }