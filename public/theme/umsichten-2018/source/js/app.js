
/**
import * as Navigation from '/components/navigation.js';


window.onload = function(e) {

    var logo = document.getElementById('logo'),
    	animated = false; 

    setInterval(function() {

    	logo.classList.remove('animated-intro');

    	if (!animated)
    		logo.classList.add('animate-twist');
    	else
    		logo.classList.remove('animate-twist');

    	animated = !animated;

    }, 5000);

};
*/


(function() {
    var lastTime = 0;
    var vendors = ['ms', 'moz', 'webkit', 'o'];
    for(var x = 0; x < vendors.length && !window.requestAnimationFrame; ++x) {
        window.requestAnimationFrame = window[vendors[x]+'RequestAnimationFrame'];
        window.cancelAnimationFrame = window[vendors[x]+'CancelAnimationFrame']
                                   || window[vendors[x]+'CancelRequestAnimationFrame'];
    }
 
    if (!window.requestAnimationFrame)
        window.requestAnimationFrame = function(callback, element) {
            var currTime = new Date().getTime();
            var timeToCall = Math.max(0, 16 - (currTime - lastTime));
            var id = window.setTimeout(function() { callback(currTime + timeToCall); },
              timeToCall);
            lastTime = currTime + timeToCall;
            return id;
        };
 
    if (!window.cancelAnimationFrame)
        window.cancelAnimationFrame = function(id) {
            clearTimeout(id);
        };
}());


// add scrolling class
var fps = 15;
function draw() {
    setTimeout(function() {
        requestAnimationFrame(draw);
        var content = document.getElementById('content');
        var scrollTop = (window.pageYOffset !== undefined) ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop;

        (scrollTop > 0) ?  document.body.classList.add('scrolled') : document.body.classList.remove('scrolled');
        
    }, 1000 / fps);
    
}



if (document.body.scrollIntoView !== undefined) {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            requestAnimationFrame(function() {
                document.querySelector(anchor.getAttribute('href')).scrollIntoView({
                    behavior: 'smooth'
                });
            })
        });
    });
}
else {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        var elem = document.querySelector(anchor.getAttribute('href'))
        var topPos = elem.offsetTop
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            requestAnimationFrame(function() {
            scrollTo(document.scrollingElement || document.documentElement, topPos, 600);
            })
        });
    });
}


function getBodyScrollTop () { 
    const el = document.scrollingElement || document.documentElement;
    return el.scrollTop; 
}

function scrollTo(element, to, duration) {
    var start = getBodyScrollTop(),
        change = to - start,
        currentTime = 0,
        increment = 20;

    var animateScroll = function(){ 
        currentTime += increment;

        var val = Math.easeInOutQuad(currentTime, start, change, duration);
        element.scrollTop = val;
        if(currentTime < duration) {
            setTimeout(animateScroll, increment);
        }
    };

    animateScroll();
}

//t = current time
//b = start value
//c = change in value
//d = duration
Math.easeInOutQuad = function (t, b, c, d) {
    t /= d/2;
    if (t < 1) return c/2*t*t + b;
    t--;
    return -c/2 * (t*(t-2) - 1) + b;
};



draw()
