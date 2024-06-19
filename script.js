/* ------- For backToTop button --------- */
let myButton = document.getElementById("backToTop");

window.onscroll = function() {scrollFunction()};

function scrollFunction(){
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        myButton.style.display = "block";
    } else {
        myButton.style.display = "none";
    }
}

function topFunction(){
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}




/* ------- Dropdown btn ------------- */
function myFunction(){
    document.getElementById("myDropdown").classList.toggle("show");
}

window.onclick = function(event){
    if(!event.taget.matches('.dropbtn')){
        var dropdowns = document.getElementsByClassName("dropdown-content");
        var i;
        for (i = 0; i < dropdowns.length; i++){
            var opendDropdown = dropdowns[i];
            if (opendDropdown.classList.contains('show')){
                opendDropdown.classList.remove('show');
            }
        }
    }
}