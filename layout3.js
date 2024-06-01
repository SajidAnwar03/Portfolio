document.querySelector('.cross').style.display='none';
document.querySelector('.hamburger').addEventListener("click", ()=>{
    document.querySelector('.sidebar').classList.toggle('sidebarGo');
    document.querySelector('.content').classList.toggle('.contentRight');
    if(document.querySelector('.sidebar').classList.contains('sidebarGo')){
        setTimeout(()=>{
            document.querySelector('.ham').style.display= 'inline';
        },300)
        document.querySelector('.cross').style.display='none';   
    }
    else
    {
        setTimeout(()=>{
            document.querySelector('.cross').style.display='inline';
        },300)
        document.querySelector('.ham').style.display='none'; 
    }
})
    
    // var waypoint = new Waypoint({
    //     element: document.getElementById('px-offset-waypoint'),
    //     handler: function(direction) {
    //       notify('I am 20px from the top of the window')
    //     },
    //     offset: 20 
    //   })


$(document).ready(function(){
    $(".hamburger").click(function(){
        $(".content").toggleClass("contentRight");
        $(".box img").toggleClass("boxImg");
    });

    $("#about").mouseenter(function(){
        $("#html").addClass("html-animation");
        $("#css").addClass("css-animation");
        $("#js").addClass("js-animation");
      });

    $("#abt").click(function(){
        $("#html").addClass("html-animation");
        $("#css").addClass("css-animation");
        $("#js").addClass("js-animation");
      });
});




