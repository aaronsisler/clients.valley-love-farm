$(document).ready(function () {
    $('#chicken').show();
    displayChicken();
    displayEggs();
    displayChickenSausage();
});

function switchTab(tabId) {
    switch (tabId) {
        case "chicken":
            $('#eggs').hide();
            $('#chickensausage').hide();
            $('#chicken').show();
            resetActiveListItem();
            break;
        case "eggs":
            $('#chicken').hide();
            $('#chickensausage').hide();
            $('#eggs').show();
            resetActiveListItem();
            break;
        case "chickensausage":
            $('#chicken').hide();
            $('#eggs').hide();
            $('#chickensausage').show();
            resetActiveListItem();
            break;
        default:
            $('#chicken').hide();
            $('#eggs').hide();
            $('#chickensausage').hide();
    }
};

function displayChicken() {
    const chickenProducts = [
        { title: "Whole", price: "$7/lb" },
        { title: "Cut-Up", price: "$9/lb" },
        { title: "Leg Quarters", price: "$10/lb" },
        { title: "Boneless Breasts", price: "$13/lb" },
        { title: "Drumsticks", price: "$9/lb" },
        { title: "Boneless Thighs", price: "$11/lb" },
        { title: "Hearts and Livers", price: "$6/lb" },
        { title: "Parts", price: "$6/lb" },
    ]

    chickenProducts.forEach(item => {
        document.getElementById('chicken').getElementsByTagName('ul')[0].appendChild(appendLi(item));
    });
}

function displayEggs() {
    const eggProducts = [
        { title: "Dozen", price: "$6" },
        { title: "Flat (2.5 Dozen)", price: "$15" },
    ]

    eggProducts.forEach(item => {
        document.getElementById('eggs').getElementsByTagName('ul')[0].appendChild(appendLi(item));
    });
}

function displayChickenSausage() {
    const chickenSausageProducts = [
        { title: "Maple Breakfast Links", price: "$15/lb" },
        { title: "Tomato and Basil", price: "$15/lb" },
        { title: "Garlic and Spinach", price: "$15/lb" },
        { title: "Andouille (Cajun)", price: "$15/lb" },
    ]

    chickenSausageProducts.forEach(item => {
        document.getElementById('chickensausage').getElementsByTagName('ul')[0].appendChild(appendLi(item));
    });
}