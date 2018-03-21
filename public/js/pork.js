$(document).ready(function () {
    $('#pork').show();
    displayPork();
    displayPorkSausage();
});

function switchTab(tabId) {
    switch (tabId) {
        case "pork":
            $('#porksausage').hide();
            $('#pork').show();
            resetActiveListItem();
            break;
        case "porksausage":
            $('#pork').hide();
            $('#porksausage').show();
            resetActiveListItem();
            break;
        default:
            $('#pork').hide();
            $('#porksausage').hide();
    }
};

function displayPork() {
    const porkProducts = [
        { title: "Pork Chops", price: "$12/lb" },
        { title: "Smoked Pork Chops", price: "$13/lb" },
        { title: "Loin Back Ribs", price: "$12/lb" },
        { title: "Shoulder Roast", price: "$9/lb" },
        { title: "Tenderloin", price: "$14/lb" },
        { title: "Boston Butt Roast", price: "$8/lb" },
        { title: "Bacon", price: "$12/lb" },
    ]

    porkProducts.forEach(item => {
        document.getElementById('pork').getElementsByTagName('ul')[0].appendChild(appendLi(item));
    });
}

function displayPorkSausage() {
    const porkSausageProducts = [
        { title: "Maple Breakfast Links", price: "$15" },
        { title: "Tomato and Basil", price: "$15" },
        { title: "Garlic and Spinach", price: "$15" },
        { title: "Andouille (Cajun)", price: "$15" },
    ]

    porkSausageProducts.forEach(item => {
        document.getElementById('porksausage').getElementsByTagName('ul')[0].appendChild(appendLi(item));
    });
}