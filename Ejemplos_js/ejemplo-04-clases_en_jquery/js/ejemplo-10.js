$(document).ready(initializeEvents);

function initializeEvents(){
    $("#text1").focus(setfocus);
    $("#text1").blur(setblur);
    $("#text2").focus(setfocus);
    $("#text2").blur(setblur);
}

function setfocus(){
    $(this).css("color", "#f00");
}

function setblur(){
    $(this).css("color", "#00f");
}