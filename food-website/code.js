var index = 0;
var images;
var time;

autoSlide();

function autoSlide(n) {
    images = document.getElementsByClassName('image');

    for (var i = 0; i < images.length; i++) {
        images[i].style.display = "none";
    }

    if (index > images.length - 1) {
        index = 0;
    }
    images[index].style.display = "block";
    index++;

    time = setTimeout(autoSlide, 4000);
}

function manualSlide(n) {
    clearTimeout(time);
    newIndex = index + n;
    autoSlide(newIndex);
}

/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}