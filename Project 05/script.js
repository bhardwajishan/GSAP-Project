function page1Animation(){
    var tl = gsap.timeline();

tl.from("nav h1, nav h4, nav button",{
    y:-30,
    opacity:0,
    delay:0.5,
    duration:0.8,
    stagger:0.1
})

tl.from(".center-part1 h2",{
    x:-300,
    opacity:0,
    duration:0.6
})
tl.from(".center-part1 p",{
    x:-100,
    opacity:0,
    duration:0.4
})
tl.from(".center-part1 button",{
    opacity:0,
    scale:0.7,
    duration:0.4
})
tl.from(".center-part2 img",{
    opacity:0,
    duration:0.7,
    x:200
},"-=0.5")

tl.from(".section1bottom img",{
    opacity:0,
    y:30,
    duration:0.6,
    stagger:0.1
})
}
page1Animation();

function page2Animation(){
    var tl2 = gsap.timeline({
        scrollTrigger:{
            trigger:".section2",
            scroller:"body",
            start:"top 50%",
            end:"top 0%",
            scrub:2
        }
    })
    
    tl2.from(".services h3",{
        opacity:0,
        x:-40,
        duration:0.5
    })
    tl2.from(".services p",{
        opacity:0,
        x:100,
        duration:0.5
    })
    
    tl2.from(".elem.line1.left",{
        x:-300,
        opacity:0,
        duration:1
    },"line1")
    tl2.from(".elem.line1.right",{
        x:300,
        opacity:0,
        duration:1
    },"line1")
    tl2.from(".elem.line2.left",{
        x:-300,
        opacity:0,
        duration:1
    },"line2")
    tl2.from(".elem.line2.right",{
        x:300,
        opacity:0,
        duration:1
    },"line2")
}
page2Animation();

function page3Animation(){
    var tl3 = gsap.timeline({
        scrollTrigger:{
            trigger:".section3",
            scroller:"body",
            start:"top 70%"
        }
    })
    
    tl3.from(".left-upper h5",{
        opacity:0,
        x:-200,
        duration:0.5,
        delay:0.7
    })
    tl3.from(".left-lower p",{
        opacity:0,
        x:-80,
        duration:0.4
    })
    tl3.from(".left-lower button",{
        opacity:0,
        scale:0.5,
        duration:0.3
    })
    tl3.from(".part1-right img",{
        opacity:0,
        x:100,
        duration:0.5
    },"-=0.6")
    var tl4 = gsap.timeline({
        scrollTrigger:{
            trigger:".section3",
            scroller:"body",
            start:"top 50%",
            end:"top 0",
            scrub:2
        }
    })
    
    tl4.from(".services2 h3",{
        opacity:0,
        x:-40,
        duration:0.2
    })
    tl4.from(".services2 p",{
        opacity:0,
        x:100,
    })
    
    tl4.from(".section3-part2",{
        y:100,
        opacity:0,
        duration:1
    })
    tl4.from(".section3-part2 .section3-first",{
        y:100,
        opacity:0,
        duration:0.3
    },"end")
    tl4.from(".section3-part2 .section3-center",{
        y:100,
        opacity:0,
        duration:0.3
    },"end")
    tl4.from(".section3-part2 .section3-last",{
        y:100,
        opacity:0,
        duration:0.3
    },"end")
    
    tl4.from(".section3-part2 h5",{
        x:-30,
        opacity:0,
        duration:0.2
    })
}

page3Animation();

