import Splide from '@splidejs/splide';
import '@splidejs/splide/css';
import '@splidejs/splide/css/sea-green';
import intlTelInput from 'intl-tel-input';
import 'intl-tel-input/build/css/intlTelInput.css';
import $ from "jquery";
import {auto} from "@popperjs/core";

$(document).ready(function() {
    if (document.querySelector(".splide") && document.querySelector(".auth-box-container")) {
        new Splide( '.splide', {
            type   : 'loop',
            perPage: 1,
            arrows:false
        }).mount();
    }

    if (document.querySelector("#phone_number")){
        const input = document.querySelector("#phone_number");
        intlTelInput(input, {
            utilsScript: "https://cdn.jsdelivr.net/npm/intl-tel-input@23.0.11/build/js/utils.js",
            separateDialCode: true,
            initialCountry:auto,
            autoPlaceholder: "aggressive"
        });
    }
});