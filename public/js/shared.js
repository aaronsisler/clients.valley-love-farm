$(document).ready(function () {
    $('#currentYear').text(new Date().getFullYear());
});

function resetActiveListItem() {
    $('.tab li').click(function () {
        $(this).addClass('active').siblings().removeClass('active')
    });
}

function appendLi(item) {
    let h4 = document.createElement('h4');
    h4.innerHTML = item.title;
    let h5 = document.createElement('h5');
    h5.innerHTML = item.price;
    let li = document.createElement('li');
    li.setAttribute('class', 'item');
    li.appendChild(h4);
    li.appendChild(h5);
    return li;
}

//Functions for nav menu on each page
function openSideMenu() {
    $('#nav_side_menu').addClass('nav_side_menu_open');
    $('#page_top').addClass('body_open');
    $('#nav_mobile_open').hide();
    $('#nav_mobile_close').show();
}
function closeSideMenu() {
    $('#nav_side_menu').removeClass('nav_side_menu_open');
    $('#page_top').removeClass('body_open');
    $('#nav_mobile_close').hide();
    $('#nav_mobile_open').show();
}

(function ($) {
    "use strict"; // Start of use strict

    // jQuery for page scrolling feature - requires jQuery Easing plugin
    $('a.page-scroll').bind('click', function (event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: ($($anchor.attr('href')).offset().top - 50)
        }, 1250, 'easeInOutExpo');
        event.preventDefault();
    });

})(jQuery); // End of use strict
