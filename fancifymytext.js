function bigger() {
    document.getElementById("textbox").style.fontSize = "24pt";
}

function fancy() {
    let isCheckedFancy = document.getElementById("fancy").checked;
    document.getElementById("boring").checked = false;
    if (isCheckedFancy) {
        document.getElementById("textbox").style.fontWeight = "bold";
        document.getElementById("textbox").style.textDecoration = "underline";
        document.getElementById("textbox").style.color = "blue";
    }
}

function boring() {
    var isCheckedBoring = document.getElementById("boring").checked;
    document.getElementById("fancy").checked = false;
    if (isCheckedBoring) {
        document.getElementById("textbox").style.fontWeight = "normal";
        document.getElementById("textbox").style.textDecoration = "none";
        document.getElementById("textbox").style.color = "black";
    }
}

function moo() {
    var content = document.getElementById("textbox");
    content.value = content.value.toUpperCase();
    
    var split = content.value.split(".");
    content.value = split.join("-Moo");
}