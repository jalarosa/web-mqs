function height_handler(){767<$(window).width()?$(".maxheight").equalHeights():$(".maxheight").css({height:"auto"}),767<$(window).width()?$(".maxheight1").equalHeights():$(".maxheight1").css({height:"auto"})}$(function(){$(".maxheight").each(function(){$(this).contents().wrapAll("<div class='box_inner'></div>")}),$(".maxheight1").each(function(){$(this).contents().wrapAll("<div class='box_inner'></div>")})}),$(window).bind("resize",height_handler).bind("load",height_handler),function(e){e.fn.equalHeights=function(t,i){return tallest=t||0,this.each(function(){e(">.box_inner",this).outerHeight()>tallest&&(tallest=e(">.box_inner",this).outerHeight())}),i&&tallest>i&&(tallest=i),this.each(function(){e(this).height(tallest)})}}(jQuery);