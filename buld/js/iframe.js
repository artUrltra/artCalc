$("iframe").on("load",function(){$(".preloade-wrapper").fadeOut(500),$("body").css("overflow","auto")}),$("iframe").on("load",function(){var a=document.getElementsByTagName("iframe")[0],t=a.contentWindow.document,e=$(t).height();$("iframe").height(e)}),$(function(){function a(a){var t="#state"+a;$("#allStates > *").fadeOut(100),$("#allStates > "+t).delay(100).fadeIn(100)}var t=$("#minbeds").children().length,e=$("#minbeds"),r=$("<div id='slider'></div>").insertAfter(e).slider({min:1,max:t,range:"min",value:e[0].selectedIndex+1,slide:function(t,i){e[0].selectedIndex=i.value-1;var r=$("#minbeds :nth-child("+i.value+")").text();$(".ui-slider-handle").html("<span class='showStageName'>"+r+"</span>"),a(i.value)}});for($("#minbeds").on("change",function(){r.slider("value",this.selectedIndex+1)}),i=1;i<=t;i++){var s=100/(t-1);$("#slider").append('<span class="possibleState" style="left: '+s*(i-1)+'%;"></span>')}$("#allStates > *").fadeOut(0),$("#allStates > #state1").fadeIn(0)});
