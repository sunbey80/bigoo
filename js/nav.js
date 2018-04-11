$(function(){
    $(".ul_1 li:eq(0),.nav_s1").hover(
	    function(){
		    $(".nav_s1").show();
		},function(){
		    $(".nav_s1").hide();
		}
	);
	$(".ul_1 li:eq(1),.nav_s2").hover(
	    function(){
		    $(".nav_s2").show();
		},function(){
		    $(".nav_s2").hide();
		}
	);
	$(".ul_1 li:eq(2),.nav_s3").hover(
	    function(){
		    $(".nav_s3").show();
		},function(){
		    $(".nav_s3").hide();
		}
	);
	
})

//qie
$(document).ready(function(){
$(".qietabp .qiebtn:first").addClass("cur");  
$(".qietab .qietabd:not(:first)").hide();  
$(".qietabp .qiebtn").click(
		function(){  
			$(".qietabp .qiebtn").removeClass("cur");  
			$(this).addClass("cur");  
			$(".qietab .qietabd").hide(); 
            console.log($(this).attr("id")) 
			$("."+$(this).attr("id")).fadeIn(100);  
		});

});

//news
(function($){
$.fn.extend({
        Scroll:function(opt,callback){
               
                if(!opt) var opt={};
                var _btnUp = $("#"+ opt.up);
                var _btnDown = $("#"+ opt.down);
                var timerID;
                var _this=this.eq(0).find("ul:first");
                var     lineH=_this.find("li:first").height(), 
                        line=opt.line?parseInt(opt.line,10):parseInt(this.height()/lineH,10), //每次滚动的行数，默认为一屏，即父容器高度
                        speed=opt.speed?parseInt(opt.speed,10):500; 
                        timer=opt.timer 
                if(line==0) line=1;
                var upHeight=0-line*lineH;
                var scrollUp=function(){
                        _btnUp.unbind("click",scrollUp); 
                        _this.animate({
                                marginTop:upHeight
                        },speed,function(){
                                for(i=1;i<=line;i++){
                                        _this.find("li:first").appendTo(_this);
                                }
                                _this.css({marginTop:0});
                                _btnUp.bind("click",scrollUp); 
                        });

                }
                var scrollDown=function(){
                        _btnDown.unbind("click",scrollDown);
                        for(i=1;i<=line;i++){
                                _this.find("li:last").show().prependTo(_this);
                        }
                        _this.css({marginTop:upHeight});
                        _this.animate({
                                marginTop:0
                        },speed,function(){
                                _btnDown.bind("click",scrollDown);
                        });
                }
                var autoPlay = function(){
                        if(timer)timerID = window.setInterval(scrollUp,timer);
                };
                var autoStop = function(){
                        if(timer)window.clearInterval(timerID);
                };
                _this.hover(autoStop,autoPlay).mouseout();
                _btnUp.css("cursor","pointer").click( scrollUp ).hover(autoStop,autoPlay);
                _btnDown.css("cursor","pointer").click( scrollDown ).hover(autoStop,autoPlay);

        }       
})
})(jQuery);

$(document).ready(function(){
        $("#scrollDiv").Scroll({line:1,speed:300,timer:2000});
});


//flash
var t = n = count = 0;
$(function(){
	count = $("#su_slide_list a").size();
	$("#su_slide_list a:not(:first-child)").hide();
	$("#su_slide_info").html($("#su_slide_list a:first-child").find("img").attr('alt'));
	$("#su_slide_text li:first-child").addClass("hover");
	
	$("#su_slide_text li").click(function(){
		var i = $(this).attr("value") - 1;
		n = i;
		if (i >= count) return;
		$("#su_slide_info").html($("#su_slide_list a").eq(i).find("img").attr('alt'));
		var aimgbg=$("#su_slide_list a").eq(i).find("img").attr('src');
		$("#su_slide_list a").eq(i).css('background','url('+aimgbg+') center top no-repeat');
		$("#su_slide_list a").filter(":visible").fadeOut(500).parent().children().eq(i).fadeIn(500);
		$(this).addClass("hover").siblings().removeClass("hover");
	});
	
	t = setInterval("showAuto()", 3000);
	$("#su_slide").hover(function(){clearInterval(t)}, function(){t = setInterval("showAuto()", 3000);});
})
 
function showAuto()
{
	n = n >= (count - 1) ? 0 : n + 1;
	$("#su_slide_text li").eq(n).triggerHandler('click');
}

$(function(){
    $(".reserve .close").click(function(){
        $(".reserve").fadeOut();
    })
})

$(function(){
    $("nav ul li:eq(0),nav ul li:eq(1),nav ul li:eq(2),nav ul li:eq(3),nav ul li:eq(4),nav ul li:eq(5),nav ul li:eq(6),nav ul li:eq(7),nav ul li:eq(8)").hover(function(){
                $(this).find(".navsec").show().siblings().addClass("cur");
                           },function(){
                $(this).find(".navsec").hide().siblings().removeClass("cur");
                           });
    $(".secnav ul li:eq(0),.secnav ul li:eq(1),.secnav ul li:eq(2),.secnav ul li:eq(3),.secnav ul li:eq(4),.secnav ul li:eq(5),.secnav ul li:eq(6),.secnav ul li:eq(7),.secnav ul li:eq(8)").hover(function(){
                $(this).find(".navsec").show().siblings().addClass("cur").parent().addClass("hover");
                           },function(){
                $(this).find(".navsec").hide().siblings().removeClass("cur").parent().removeClass("hover");
                           });


    $(".side-ewm-item").hover(function(){
        $(".side-ewm").fadeIn();
    },function(){
        $(".side-ewm").fadeOut();
    })
    $(".side-qq-item").hover(function(){
        $(".side-qq").fadeIn();
    },function(){
        $(".side-qq").fadeOut();
    })
    $(".side-tel-item").hover(function(){
        $(".side-tel").fadeIn();
    },function(){
        $(".side-tel").fadeOut();
    })

    $(".modexten ul li,.modup ul li,.modzxal ul li").click(function(){
        $(".openbox").fadeIn();
    })
    $(".openbox").click(function(){
        $(this).fadeOut();
    })

    $(".designer .fr ul li").click(function(){
        var clickcls = $(this).attr("class");
        if(clickcls == "cur"){
            $(this).removeClass("cur");
        }else{
            $(this).addClass("cur");
        }
    })
})




