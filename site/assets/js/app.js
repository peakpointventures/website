/* Template Name: Dorsin - Tailwindcss Landing Page Template
   Author: Themesbrand
   Version: 1.1.0
   File Description: Main Js file of the template
*/

function windowScroll() {
    const navbar = document.getElementById("navbar");
    if (
        document.body.scrollTop >= 50 ||
        document.documentElement.scrollTop >= 50
    ) {
        navbar.classList.add("is-sticky");
    } else {
        navbar.classList.remove("is-sticky");
    }
}

window.addEventListener('scroll', (ev) => {
    ev.preventDefault();
    windowScroll();
})

// Navbar Active Class

var spy = new Gumshoe('#navbar-navlist a', {
    // Active classes
    navClass: 'active', // applied to the nav list item
    contentClass: 'active', // applied to the content
    offset: 70
});


// Smooth scroll 
var scroll = new SmoothScroll('#navbar-navlist a', {
    speed: 500,
    offset: 70
});

// Smooth scroll 
var a_scroll = new SmoothScroll('.cta', {
    speed: 500,
    offset: 70
});



// Menu Collapse

const toggleCollapse = (elementId, show = true) => {
    const collapseEl = document.getElementById(elementId);
    if (show) {
        collapseEl.classList.remove('hidden');
    } else {
        collapseEl.classList.add('hidden');
    }
}

document.addEventListener('DOMContentLoaded', () => {
    // Toggle target elements using [data-collapse]
    document.querySelectorAll('[data-collapse]').forEach(function (collapseToggleEl) {
        var collapseId = collapseToggleEl.getAttribute('data-collapse');

        collapseToggleEl.addEventListener('click', function () {
            toggleCollapse(collapseId, document.getElementById(collapseId).classList.contains('hidden'));
        });
    });
});

window.toggleCollapse = toggleCollapse;


//
//Dropdown
//

document.addEventListener('DOMContentLoaded', () => {
    // Toggle dropdown elements using [data-dropdown-toggle]
    document.querySelectorAll('[data-dropdown-toggle]').forEach(function (dropdownToggleEl) {
        const dropdownMenuId = dropdownToggleEl.getAttribute('data-dropdown-toggle');
        const dropdownMenuEl = document.getElementById(dropdownMenuId);

        // options
        const placement = dropdownToggleEl.getAttribute('data-dropdown-placement');

        dropdownToggleEl.addEventListener('click', function (event) {
            var element = event.target;

            // toggle when click on the button
            dropdownMenuEl.classList.toggle('show');

            function handleDropdownOutsideClick(event) {
                var targetElement = event.target; // clicked element
                if (targetElement !== dropdownMenuEl && targetElement !== dropdownToggleEl && !dropdownToggleEl.contains(targetElement)) {
                    dropdownMenuEl.classList.remove('show');
                    document.body.removeEventListener('click', handleDropdownOutsideClick, true);
                }
            }

            // hide popper when clicking outside the element
            document.body.addEventListener('click', handleDropdownOutsideClick, true);
        });
    });
});



//
// Contact Form Validation
//

document.getElementById('myForm')
 .addEventListener('submit', function(event) {
   event.preventDefault();
   document.querySelector("#submit").setAttribute("disabled", true);
   document.querySelector("#submit").value= "Sending email..."

    const serviceID = 'default_service';
    const templateID = 'template_2o7wtpd';

    var name = document.forms["myForm"]["from_name"].value;
    var email = document.forms["myForm"]["from_email"].value;
    var subject = document.forms["myForm"]["subject"].value;
    var comments = document.forms["myForm"]["message"].value;
    document.getElementById("error-msg").style.opacity = 0;
    document.getElementById('error-msg').innerHTML = "";
    if (name == "" || name == null) {
        document.getElementById('error-msg').innerHTML = "<div class='p-3 text-center mb-4 text-sm text-orange-700 bg-orange-100 rounded error_message'>Please enter a Name</div>";
        fadeIn();
        document.querySelector("#submit").removeAttribute("disabled", false);
        document.querySelector("#submit").value= "Send Message"
        return false;
    }
    if (email == "" || email == null) {
        document.getElementById('error-msg').innerHTML = "<div class='p-3 text-center mb-4 text-sm text-orange-700 bg-orange-100 rounded error_message'>Please enter a Email</div>";
        fadeIn();
        document.querySelector("#submit").removeAttribute("disabled", false);
        document.querySelector("#submit").value= "Send Message"
        return false;
    }
    if (subject == "" || subject == null) {
        document.getElementById('error-msg').innerHTML = "<div class='p-3 text-center mb-4 text-sm text-orange-700 bg-orange-100 rounded error_message'>Please enter a Subject</div>";
        fadeIn();
        document.querySelector("#submit").removeAttribute("disabled", false);
        document.querySelector("#submit").value= "Send Message"
        return false;
    }
    if (comments == "" || comments == null) {
        document.getElementById('error-msg').innerHTML = "<div class='p-3 text-center mb-4 text-sm text-orange-700 bg-orange-100 rounded error_message'>Please enter a Comments</div>";
        fadeIn();
        document.querySelector("#submit").removeAttribute("disabled", false);
        document.querySelector("#submit").value= "Send Message"
        return false;
    }

    emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
    //   btn.value = 'Send Email';
    // document.querySelector("#submit").removeAttribute("disabled", false);
    document.querySelector("#submit").value= "Message sent"
      alert('Your query has been sent!');
    }, (err) => {
    //   btn.value = 'Send Email';
    document.querySelector("#submit").removeAttribute("disabled", false);
      alert(JSON.stringify(err));
    });
    document.querySelector("#submit").value= "Send Message"
    return false;
 })

function fadeIn() {
    var fade = document.getElementById("error-msg");
    var opacity = 0;
    var intervalID = setInterval(function () {
        if (opacity < 1) {
            opacity = opacity + 0.5
            fade.style.opacity = opacity;
        } else {
            setTimeout(()=>{
                fade.style.opacity=0
            },3000)
            clearInterval(intervalID);
        }
    }, 200);
}


// Light-dark
var isChangeMode = document.getElementById("mode");
if (isChangeMode) {
    isChangeMode.addEventListener("click", function (e) {
        var themeMode = document.documentElement.getAttribute("data-mode");
        if (themeMode == "light") {
            document.documentElement.setAttribute("data-mode", "dark");
        } else {
            document.documentElement.setAttribute("data-mode", "light");
        }
    });
}


// ltr-rtl
var isChangeMode = document.getElementById("ltr-rtl");
if (isChangeMode) {
    isChangeMode.addEventListener("click", function (e) {
        var themeMode = document.documentElement.getAttribute("dir");
        if (themeMode == "ltr") {
            document.documentElement.setAttribute("dir", "rtl");
        } else {
            document.documentElement.setAttribute("dir", "ltr");
        }

        swiperDir();
    });
}

