import $ from "jquery";

$(document).ready(function () {
    //attachValidation();
    attachInputLabelActions();
    attachPasswordToggleActions();
});

function attachValidation(){

}

function attachInputLabelActions() {
    $('.input-element .input-box').focusin(
        function () {
            $(this).parent().addClass("active");
            $(this).find(".input-label").show();
        }).focusout(
        function () {
            $(this).parent().removeClass("active");
            $(this).find(".input-label").hide();
        });
}


function attachPasswordToggleActions() {
    $('.suffix-password-toggle').on( "click", function() {
        let thisPwBox = $(this).parent().find("input");
        if (thisPwBox.attr('type') === 'password'){
            thisPwBox.attr('type', 'text')
            $(this).find("button").attr("data-state", "visible");
        } else {
            thisPwBox.attr('type', 'password');
            $(this).find("button").attr("data-state", "hidden");
        }
    });
}