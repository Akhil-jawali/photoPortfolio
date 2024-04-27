$(document).ready(function () {
    window.onscroll = function () { scrollFunction() };
})

function selectedCategory(id, divId) {
    $('.workHover').removeClass('activeWork')
    $(id).removeClass('bg-white')
    $(id).addClass('activeWork')

    $('.displayWork').addClass('d-none')
    $(divId).removeClass('d-none')
}

function scrollFunction() {
    if (document.body.scrollTop > 400 || document.documentElement.scrollTop > 300) {
        document.getElementById("scrollBtn").classList.remove("d-none");
    } else {
        document.getElementById("scrollBtn").classList.add("d-none");
    }
}

function up() {
    $('html, body').animate({ scrollTop: 0 }, 100); 
}