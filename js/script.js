$('li a').click(function(e) {
    e.preventDefault();
    $('li a.active').removeClass('active');
    $(this).addClass('active');
});

const openNav = () => {
    document.getElementById("mySidenav").style.width = "50%";
}
  
const closeNav = () => {
    document.getElementById("mySidenav").style.width = "0";
  }