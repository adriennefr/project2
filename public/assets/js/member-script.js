

function dropBubble(){
    let rand = Math.floor(Math.random()*60 + 20)
    // $("#bub").html(`<div class="bubble" style='border-radius: 50px; position: absolute;
    // width:100px;height:100px; background-color:blueviolet; top: -150px; left:${rand}
    // -webkit-transform: translate(0,1000px); -webkit-transition: all 4s ease-in-out'></div>`)
    $('.bubble').css('top', '-150px')
    $('.bubble').css('left', `${rand}%`)
    $('.bubble').css('-webkit-transform', 'translate(0,1000px)')
    $('.bubble').css('-webkit-transition', 'all 10s ease-in-out')
    // let y = -150;
    // while(y<1000){
    //     setInterval(function(){$('.bubble').css('top', `${y}px`)
    //     y+=1;
    // }, 20)
        
}
// }

dropBubble()

