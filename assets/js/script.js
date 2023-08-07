var isDarkMode = false;
function startDarkMode() {
    var element = document.body;
    var navbar = document.getElementById('navbar');
    var navIcon = document.getElementById('darkModeIcon');
    var homeDisplayPicture = document.getElementById('homeDisplayPicture');
    element.classList.toggle("dark-mode");
    if (isDarkMode) {
        navbar.classList.remove("navbar-dark-mode");
        navIcon.src="./assets/svg/night-icon.svg";
        navIcon.classList.remove("svg-nav-dm-icon");
        homeDisplayPicture.src="./assets/gif/light_mode_profile.gif";
        homeDisplayPicture.classList.remove("dm-gif-profile");
        homeDisplayPicture.classList.add("gif-profile");
        document.documentElement.style.setProperty('--offset-button', '#e5f3f5');
    } else {
        navbar.classList.add("navbar-dark-mode");
        navIcon.src="./assets/svg/sun-warm-icon.svg";
        navIcon.classList.add("svg-nav-dm-icon");
        homeDisplayPicture.src="./assets/gif/dark_mode_profile.gif";
        homeDisplayPicture.classList.add("dm-gif-profile");
        homeDisplayPicture.classList.remove("gif-profile");
        document.documentElement.style.setProperty('--offset-button', '#171717');
    }
    isDarkMode = !isDarkMode;
}

document.addEventListener('DOMContentLoaded', function() {
    function toggleHeaderBorder() {
        var header = document.querySelector('.header');
        if (window.scrollY > 0) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    }
  
    toggleHeaderBorder();
  
    window.addEventListener('scroll', function() {
        toggleHeaderBorder();
    });
});


var TxtType = function(el, toRotate, period) {
    this.toRotate = toRotate;
    this.el = el;
    this.loopNum = 0;
    this.period = parseInt(period, 10) || 2000;
    this.txt = '';
    this.tick();
    this.isDeleting = false;
};

TxtType.prototype.tick = function() {
    var i = this.loopNum % this.toRotate.length;
    var fullTxt = this.toRotate[i];

    if (this.isDeleting) {
        this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
        this.txt = fullTxt.substring(0, this.txt.length + 1);
    }

    this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

    var that = this;
    var delta = 200 - Math.random() * 100;

    if (this.isDeleting) { delta /= 2; }

    if (!this.isDeleting && this.txt === fullTxt) {
        delta = this.period;
        this.isDeleting = true;
    } else if (this.isDeleting && this.txt === '') {
        this.isDeleting = false;
        this.loopNum++;
        delta = 500;
    }

    setTimeout(function() {
        that.tick();
    }, delta);
};

window.onload = function() {
    var circle = document.getElementById("dpColumn");
    circle.classList.add("onload");

    var elements = document.getElementsByClassName('typewrite');
    for (var i=0; i<elements.length; i++) {
        var toRotate = elements[i].getAttribute('data-type');
        var period = elements[i].getAttribute('data-period');
        if (toRotate) {
            new TxtType(elements[i], JSON.parse(toRotate), period);
        }
    }
    // INJECT CSS
    var css = document.createElement("style");
    css.type = "text/css";
    css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #37b2c8}";
    document.body.appendChild(css);
};

function isElementVisible(el, partial) {
    var viewTop = window.scrollY,
        viewBottom = viewTop + window.innerHeight,
        _top = el.getBoundingClientRect().top + window.scrollY,
        _bottom = _top + el.clientHeight,
        compareTop = partial === true ? _bottom : _top,
        compareBottom = partial === true ? _top : _bottom;
  
    return compareBottom <= viewBottom && compareTop >= viewTop;
  }
  
var win = window;
var allMods = document.querySelectorAll(".animate-onscroll");

allMods.forEach(function(el) {
    if (isElementVisible(el, true)) {
        el.classList.add("already-visible");
    }
});

win.addEventListener("scroll", function() {
    allMods.forEach(function(el) {
        if (isElementVisible(el, true)) {
            el.classList.add("come-in");
        }
    });
});


var modal = document.getElementById("myModal");
var autoAcadModal = document.getElementById("autoAcadModal");
var qunnecterModal = document.getElementById("qunnecterModal");
var inviModal = document.getElementById("inviModal");
var salonModal = document.getElementById("salonModal");
var elyModal = document.getElementById("elyModal");

var autoAcadButton = document.getElementById("autoAcadButton");
var qunnecterButton = document.getElementById("qunnecterButton");
var inviButton = document.getElementById("inviButton");
var salonButton = document.getElementById("salonButton");
var elyButton = document.getElementById("elyButton");

var span = document.getElementsByClassName("close");

autoAcadButton.onclick = function() {
    autoAcadModal.style.display = "block";
    qunnecterModal.style.display = "none";
    inviModal.style.display = "none";
    salonModal.style.display = "none";
    elyModal.style.display = "none";
    modal.style.display = "block";
    closeModal = span[0];
}

qunnecterButton.onclick = function() {
    autoAcadModal.style.display = "none";
    qunnecterModal.style.display = "block";
    inviModal.style.display = "none";
    salonModal.style.display = "none";
    elyModal.style.display = "none";
    modal.style.display = "block";
    closeModal = span[1];
}

inviButton.onclick = function() {
    autoAcadModal.style.display = "none";
    qunnecterModal.style.display = "none";
    inviModal.style.display = "block";
    salonModal.style.display = "none";
    elyModal.style.display = "none";
    modal.style.display = "block";
    closeModal = span[2];
}

salonButton.onclick = function() {
    autoAcadModal.style.display = "none";
    qunnecterModal.style.display = "none";
    inviModal.style.display = "none";
    salonModal.style.display = "block";
    elyModal.style.display = "none";
    modal.style.display = "block";
    closeModal = span[3];
}

elyButton.onclick = function() {
    autoAcadModal.style.display = "none";
    qunnecterModal.style.display = "none";
    inviModal.style.display = "none";
    salonModal.style.display = "none";
    elyModal.style.display = "block";
    modal.style.display = "block";
    closeModal = span[4];
}

for (var i = 0; i < span.length; i++) {
    span[i].onclick = function() {
        modal.style.display = "none";
    };
}
    
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
