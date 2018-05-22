$(function(){
    var width = $('.mobile-menu').outerWidth();
    var menuOpen = false;
    $('#burger,.overlay,.close').click(function(){
        if(menuOpen){
            $('.mm-container').css({'transform':'translateX(-100vw)'});
            $('.overlay,.close').css({'opacity':'0','z-index':'-1'});
            menuOpen = false;
        }
        else{
            $('.mm-container').css({'transform':'translateX(0)'});
            $('.overlay,.close').css({'opacity':'0.8','z-index':'99'});
            menuOpen = true;
        }
    });
});