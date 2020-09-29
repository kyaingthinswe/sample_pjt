
 $('.navbar-toggler').click(function(){
    let result = $('.navbar-collapse').hasClass('show');
});
if(result){
    $('.menu-icon').removeClass('fa-close').addClass('fa-bars');

}else{
    $('.menu-icon').removeClass('fa-bars').addClass('fa-close');

}

