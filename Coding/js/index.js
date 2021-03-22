$(document).ready(function(){
    $('#header_right_bot').hover(function(){
        $('#menu_bg').stop().animate({
            height : 240
        },1000),
        $('.sub_menu').stop().animate({
            height : 240
        },1000)
        
    },function(){
        $('#menu_bg').stop().animate({
            height : 0
        },1000)
        $('.sub_menu').stop().animate({
            height : 0
        },1000) 
    });



    $('.viewing_hour').hover(function(){
        var hour_index = $(this).index();
        $(this).css({
            backgroundColor : 'black'
        })
        $('.location').eq(hour_index).css({
            color : 'white'
        })
        $('.hour_left').eq(hour_index).css({
            color : 'white'
        })
    },function(){
        var hour_index = $(this).index();
        $(this).css({
            backgroundColor : 'gray'
        })
        $('.location').eq(hour_index).css({
            color : 'black'
        })
        $('.hour_left').eq(hour_index).css({
            color : 'black'
        })
    });

    $('#sec1_bot_left_img_2').hover(function(){
        $('#sec1_bot_left_img_2_text').css({
            display : 'block'
        });
    },function(){
        $('#sec1_bot_left_img_2_text').css({
            display : 'none'
        });
    });
    
    $('.sec1_bot_right_mid_content').hover(function(){
        var mid_content_index = $(this).index();
        $(this).css({
            backgroundColor : 'gray'
        })
        $('.sec1_bot_right_mid_content a').eq(mid_content_index).css({
            color : 'white'
        })
    },function(){
        var mid_content_index = $(this).index();
        $(this).css({
            backgroundColor : 'lightgray'
        })
        $('.sec1_bot_right_mid_content a').eq(mid_content_index).css({
            color : 'black'
        })
    });

    $('#m_menu_close').click(function(){
        $('#m_menu_wrap').css({
            display : 'none'
        });
    });
    $('#m_header_menu_btn').click(function(){
        $(' #m_menu_wrap').css({
            display : 'block'
        });
    })

    $('.m_language_text').click(function(){
        var language_index = $(this).index();
        $('.m_language_text').removeClass('on');
        $('.m_language_text').eq(language_index).addClass('on');
    })

    var m_menu_click_1 = 0;
    $('.m_main_menu').eq(0).click(function(){
        m_menu_click_1++;
        if(m_menu_click_1 % 2 == 1){
            $('#m_sub_menu_1').css({
                height : 270
            });
        } else if(m_menu_click_1 % 2 == 0){
            $('#m_sub_menu_1').css({
                height : 0
            });
        }
        
        $('.m_sub_menu').eq(1).css({
            height : 0
        });
        $('.m_sub_menu').eq(2).css({
            height : 0
        });
        $('.m_sub_menu').eq(3).css({
            height : 0
        });
        $('.m_sub_menu').eq(4).css({
            height : 0
        });
    });

    var m_menu_click_2 = 0;
    $('.m_main_menu').eq(1).click(function(){
        m_menu_click_2++;
        if(m_menu_click_2 % 2 == 1){
            $('#m_sub_menu_2').css({
                height : 130
            });
        } else if(m_menu_click_2 % 2 == 0){
            $('#m_sub_menu_2').css({
                height : 0
            });
        }

        $('.m_sub_menu').eq(0).css({
            height : 0
        });
        $('.m_sub_menu').eq(2).css({
            height : 0
        });
        $('.m_sub_menu').eq(3).css({
            height : 0
        });
        $('.m_sub_menu').eq(4).css({
            height : 0
        });
        
    });

    var m_menu_click_3 = 0;
    $('.m_main_menu').eq(2).click(function(){
        m_menu_click_3++;
        if(m_menu_click_3 % 2 == 1){
            $('#m_sub_menu_3').css({
                height : 160
            });
        } else if(m_menu_click_3 % 2 == 0){
            $('#m_sub_menu_3').css({
                height : 0
            });
        }
        
        $('.m_sub_menu').eq(1).css({
            height : 0
        });
        $('.m_sub_menu').eq(0).css({
            height : 0
        });
        $('.m_sub_menu').eq(3).css({
            height : 0
        });
        $('.m_sub_menu').eq(4).css({
            height : 0
        });
    });

    var m_menu_click_4 = 0;
    $('.m_main_menu').eq(3).click(function(){
        m_menu_click_4++;
        if(m_menu_click_4 % 2 == 1){
            $('#m_sub_menu_4').css({
                height : 70
            });
        } else if(m_menu_click_4 % 2 == 0){
            $('#m_sub_menu_4').css({
                height : 0
            });
        }
        
        $('.m_sub_menu').eq(1).css({
            height : 0
        });
        $('.m_sub_menu').eq(2).css({
            height : 0
        });
        $('.m_sub_menu').eq(0).css({
            height : 0
        });
        $('.m_sub_menu').eq(4).css({
            height : 0
        });
    });

    var m_menu_click_5 = 0;
    $('.m_main_menu').eq(4).click(function(){
        m_menu_click_5++;
        if(m_menu_click_5 % 2 == 1){
            $('#m_sub_menu_5').css({
                height : 180
            });
        } else if(m_menu_click_5 % 2 == 0){
            $('#m_sub_menu_5').css({
                height : 0
            });
        }
        
        $('.m_sub_menu').eq(1).css({
            height : 0
        });
        $('.m_sub_menu').eq(2).css({
            height : 0
        });
        $('.m_sub_menu').eq(3).css({
            height : 0
        });
        $('.m_sub_menu').eq(0).css({
            height : 0
        });
    });



});
// end