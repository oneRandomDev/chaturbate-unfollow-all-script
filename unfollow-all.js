// unfollow ALL broadcasters ( each 20 seconds run unfollow all models shown at site )
setInterval(()=>{var $btns = $(".icon_following");$.each($btns,function(i, x){$(x).click();});},20000)
