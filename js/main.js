$(document).ready(function(){  
    //btn버튼을 클릭하면 해당 섹션으로 부드럽게 이동  
    $('.btn1, .boxBtn1').click(function(){
        $('html').animate({scrollTop:0},1000,'swing');
    });
    $('.btn2, .boxBtn2').click(function(){
         $('html').animate({scrollTop:700},1000,'swing');
    });
    $('.btn3, .boxBtn3').click(function(){
        $('html').animate({scrollTop:1400},1000,'swing');
    });
    $('.btn4, .boxBtn4').click(function(){
        $('html').animate({scrollTop:2100},1000,'swing');
    });
    $('.btn5, .boxBtn5').click(function(){
        $('html').animate({scrollTop:2800},1000,'swing');
    });
    $('.btn6, .boxBtn6').click(function(){
        $('html').animate({scrollTop:3500},1000,'swing');
    });

    //스크롤 시 섹션의 위치를 판단하여 클라스 on추가
    $(window).scroll(function(){
        var yPos = $(window).scrollTop(); 
        //A.scrollTop() :A가 스크롤 된 거리(위쪽부터)

        if( yPos<700){
            $('#nav li, #btn_box li').removeClass('on');
            $('#nav li').eq(0).addClass('on');
            $('#btn_box li').eq(0).addClass('on');
        } 
        else if ( yPos>=700 && yPos<1400){
            $('#nav li, #btn_box li').removeClass('on');
            $('#nav li').eq(1).addClass('on');
            $('#btn_box li').eq(1).addClass('on');
        }
        else if ( yPos>=1400 && yPos<2100){
            $('#nav li, #btn_box li').removeClass('on');
            $('#nav li').eq(2).addClass('on');           
            $('#btn_box li').eq(2).addClass('on');
        }
        else if ( yPos>=2100 && yPos<2800){
            $('#nav li, #btn_box li').removeClass('on');
            $('#nav li').eq(3).addClass('on');
            $('#btn_box li').eq(3).addClass('on');
        }
        else if ( yPos>=2800 && yPos<3500){
            $('#nav li, #btn_box li').removeClass('on');
            $('#nav li').eq(4).addClass('on');
            $('#btn_box li').eq(4).addClass('on');
        } else {
            $('#nav li, #btn_box li').removeClass('on');
            $('#nav li').eq(5).addClass('on');
            $('#btn_box li').eq(5).addClass('on');
        }
    });
});


