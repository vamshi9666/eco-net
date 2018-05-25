console.log("back is running");
browser.runtime.onMessage.addListener(listener);
//comment

var hundred = {

    "images": {"headerURL": "assets/100.png"},
    "colors": {
        "accentcolor": "#64dd17",
        "textcolor": "#050505",
        "tab_selected": "#F5F5F5"
    }
}
var ninety = {

    "images": {"headerURL": "assets/90.png"},
    "colors": {
        "accentcolor": "#b2ff59",
        "textcolor": "#050505",
        "tab_selected": "#F5F5F5"
    }
}
var eighty = {

    "images": {"headerURL": "assets/80.png"},
    "colors": {
        "accentcolor": "#eeff41",
        "textcolor": "#050505",
        "tab_selected": "#F5F5F5"
    }
}

var seventy = {

    "images": {"headerURL": "assets/70.png"},
    "colors": {
        "accentcolor": "#ffab40",
        "textcolor": "#050505",
        "tab_selected": "#F5F5F5"
    }
}
var sixty = {

    "images": {"headerURL": "assets/60.png"},
    "colors": {
        "accentcolor": "#ffab00",
        "textcolor": "#050505",
        "tab_selected": "#F5F5F5"
    }
}


var fifty = {

    "images": {"headerURL": "assets/50.png"},
    "colors": {
        "accentcolor": "#ff6d00",
        "textcolor": "#050505",
        "tab_selected": "#F5F5F5"
    }
}
var fourty = {
    "images": {"headerURL": "assets/40.png"},
    "colors": {
        "accentcolor": "#ff6d00",
        "textcolor": "#050505",
        "tab_selected": "#F5F5F5"
    }
}


var thirty = {
    "images": {"headerURL": "assets/30.png"},
    "colors": {
        "accentcolor": "#FF8F00",
        "textcolor": "#050505",
        "tab_selected": "#F5F5F5"
    }
}

var twenty = {
    "images": {"headerURL": "assets/20.png"},
    "colors": {
        "accentcolor": "#ff3d00",
        "textcolor": "#050505",
        "tab_selected": "#F5F5F5"
    }
}

var ten = {
    "images": {"headerURL": "assets/10.png"},
    "colors": {
        "accentcolor": "#dd2c00",
        "textcolor": "#050505",
        "tab_selected": "#F5F5F5"
    }
}
var zero = {
    "images": {"headerURL": "assets/0.png"},
    "colors": {
        "accentcolor": "#a30000",
        "textcolor": "#050505",
        "tab_selected": "#F5F5F5"
    }
}

function listener (message) {

    var  timeRes = message;

    console.log(timeRes);
    if (timeRes < 1.5) {

        browser.theme.update(hundred)

    } else if (timeRes < 3) {

        browser.theme.update(ninety)

    } else if (timeRes < 4.5) {

        browser.theme.update(eighty)

    } else if (timeRes < 6) {

        browser.theme.update(seventy)

    } else if (timeRes < 7.5) {

        browser.theme.update(sixty)

    } else if (timeRes < 9) {

        browser.theme.update(fifty)

    } else if (timeRes < 10.5) {

        browser.theme.update(fourty)

    } else if (timeRes < 12) {

        browser.theme.update(thirty)

    } else if (timeRes < 13.5) {

        browser.theme.update(twenty)

    } else if (timeRes < 15) {

        browser.theme.update(ten)

    } else {

        browser.theme.update(zero)

    }

}
