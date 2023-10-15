
const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

function animateHero()
{
    var t1=gsap.timeline();
    function time()
    {
        var a=0;
        setInterval(function(){
            a=a+Math.floor(Math.random()*15);
           if(a<100)
           {
            document.querySelector("#loader h1").innerHTML=a+"%";
            document.querySelector("#loader #white").style.width=a+"%";
           }
           else{
            a=100;
            document.querySelector("#loader #white").style.width=a+"%";
            document.querySelector("#loader h1").innerHTML=a+"%";
           }
        },150)
    }
    t1.to("#loader h1",{
         delay:0.5,
         duartion:2,
         delay:1,
         onStart:time(),
    })
    t1.to("#loader",{
        top:"-100%",
        duration:1,
        delay:1
    })
    t1.from("#nav",{
    y:"-20",
    opacity:0,
    duration:1,
    ease:Expo,
   })
   t1.to(".boundingelem",{
    y:"0",
    duration:1,
    opacity:1,
    delay:0,
    stagger:0.3,
   })
   t1.from("#footer",{
    y:"40",
    dration:1,
    opacity:0,
    delay:0,
    stagger:0.2,
   })
}
function  circleMouse()
{
    window.addEventListener("mousemove",function(dets){
       document.querySelector("#minicircle").style.transform=`translate(${dets.clientX}px,${dets.clientY}px)`
    })
}
circleMouse();
animateHero();
document.querySelectorAll(".elem").forEach(function(elem)
{
    var diffrot=0;
    var rotat=0;
    elem.addEventListener("mouseleave",function(dets)
    {
        var diff=dets.clientY-elem.getBoundingClientRect().top;
        diffrot=dets.clientX-rotat;
        rotat=dets.clientX;
            gsap.to(elem.querySelector("img"),{
            opacity: 0,
            duration:0.5,
            ease:Power3,
        });
    });
    elem.addEventListener("mousemove",function(dets)
    {
        var diff=dets.clientY-elem.getBoundingClientRect().top;
        diffrot=dets.clientX-rotat;
        rotat=dets.clientX;
            gsap.to(elem.querySelector("img"),{
            opacity: 1,
            ease:Power1,
            top: diff,
            left: dets.clientX,
            rotate:gsap.utils.clamp(-20,20, diffrot*0.8),
        });
    });
    elem.addEventListener("touchend",function(dets)
    {
        var diff=dets.clientY-elem.getBoundingClientRect().top;
        diffrot=dets.clientX-rotat;
        rotat=dets.clientX;
            gsap.to(elem.querySelector("img"),{
            opacity: 0,
            ease:Power3,
            duration:0.5,
        });
    });
    elem.addEventListener("touchmove",function(dets)
    {
        var diff=dets.clientY-elem.getBoundingClientRect().top;
        diffrot=dets.clientX-rotat;
        rotat=dets.clientX;
            gsap.to(elem.querySelector("img"),{
            opacity: 1,
            ease:Power1,
            top: diff,
            left: dets.clientX,
            rotate:gsap.utils.clamp(-20,20, diffrot*0.8),
        });
    });
});
gsap.to("#page3 img",{
    scale:0.8,
    opacity:0.7,
    yoyo:"true",
    repeat:-1,
    duration:1,
})