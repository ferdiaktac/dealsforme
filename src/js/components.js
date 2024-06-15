import Splide from '@splidejs/splide';
import '@splidejs/splide/css';
import '@splidejs/splide/css/sea-green';
import Raty from 'raty-js';
import $ from "jquery";

$(document).ready(function () {
    if (document.querySelector("#categoryCarousel")) {
        let categoryCarousel = new Splide('#categoryCarousel', {
            type: 'loop',
            perPage: 10,
            perMove: 10,
            pagination: false,
            arrows: {prev: 'a', next: 's'},
            breakpoints: {
                767: {
                    arrows:false,
                    perPage: 4,
                },
                640: {
                    arrows:false,
                    perPage: 3.3,
                    gap:12,
                    slidesToShow: 3.3,

                },
            }
        });

        categoryCarousel.mount();
    }

    if (document.querySelector("#listingCarousel")) {
        let listingCarousel = new Splide('#listingCarousel', {
            type: 'loop',
            perPage: 3,
            perMove: 3,
            gap: 24,
            pagination: false,
            arrows: {prev: 'a', next: 's'},
            breakpoints: {
                1024: {
                    perMove: 3,
                    perPage: 3,

                },
                767: {
                    arrows:false,
                    perPage: 4,

                },
                640: {
                    arrows:false,
                    perPage: 1.1,
                    slidesToShow: 1.1,
                },
                450: {
                    arrows:false,
                    perPage: 1.1,
                    slidesToShow: 1.1,
                },
            }
        });

        listingCarousel.mount();
    }

    if (document.querySelector("#detailsSlider")) {
        let detailsCarousel = new Splide('#detailsSlider', {
            type: 'loop',
            perPage: 1,
            perMove: 1,
            pagination: false,
            arrows: false,
            breakpoints: {
                450: {
                    pagination:true
                },
            }
        });

        detailsCarousel.on('pagination:mounted', function (data) {
            // You can add your class to the UL element
            data.list.classList.add('splide__pagination--custom');

            // `items` contains all dot items
            data.items.forEach(function (item) {
                item.button.textContent = ""
            });
        });

        detailsCarousel.mount();
    }

    if (document.querySelector("#dealDetailsCarousel")) {
        let categoryCarousel = new Splide('#dealDetailsCarousel', {
            type: 'loop',
            perPage: 3,
            perMove: 3,
            gap: 24,
            pagination: false,
            arrows: {prev: 'a', next: 's'}
        });

        categoryCarousel.mount();
    }

    if (document.querySelector("#placeSubDetailImages")) {
        let categoryCarousel = new Splide('#placeSubDetailImages', {
            type: 'loop',
            perPage: 1,
            pagination: true,
            arrows: false
        });

        categoryCarousel.mount();
    }

    $('[data-raty]').each(function (e, k) {
        const raty = new Raty(k, {starType: 'i', space: 8});

        raty.init();
    });

    $('.faq-item').each(function (e, k) {
        let thisEl = $(k);

        thisEl.on("click", function () {
            if (thisEl.attr('aria-expanded') === 'false') {
                thisEl.attr('aria-expanded', 'true');

                $([document.documentElement, document.body]).animate({
                    scrollTop: thisEl.offset().top
                }, 2000);
            } else {
                thisEl.attr('aria-expanded', 'false')
            }
        })
    });

    $('.dfm-dropdown input[type="search"]').each(function (e, k) {
        let thisEl = $(k);

        thisEl.on("focus", function () {
            thisEl.parents(".search").find(".search-dropdown").show()
        })

        thisEl.on("blur", function () {
            thisEl.parents(".search").find(".search-dropdown").hide()

            if (thisEl.val().length > 0) {
                thisEl.parents(".search-input").find("button").show()
            } else {
                thisEl.parents(".search-input").find("button").hide()
            }
        })

        thisEl.on("keyup", function () {
            if (thisEl.val().length > 0) {
                thisEl.parents(".search-input").find("button").show()
            } else {
                thisEl.parents(".search-input").find("button").hide()
            }
        })
    });

    $('.df-tabs').each(function (e, k) {
        let thisEl = $(k);

        thisEl.find(".tab-select li").on("click", function () {
            let thisTab = $(this),
                targetEl = thisTab.attr("data-tab");

            $(thisEl).find(".tab-select li").removeClass("active");
            $(thisEl).find(".content-tab").removeClass("show");
            $(thisEl).find(`.content-tab[data-tab="${targetEl}"]`).addClass("show");

            $(this).addClass("active");
            $(this).addClass("active");

            $([document.documentElement, document.body]).animate({
                scrollTop: thisEl.offset().top - 24
            }, 200);
        })
    });

    $('.date-picker').each(function (e, k) {
        let thisEl = $(k);

        thisEl.datepicker({
            format: "dd/mm/yyyy",
            language: "tr",
            autoclose: true,
            todayHighlight: true
        });
    })

    if ($(".account-links") && isMobile()){
        $(".account-links").animate({
            scrollTop: $('.account-links .active').position().left - $('.account-links .active').width
        }, 'slow');
    }

    if ($("header") && !isMobile() && !document.querySelector(".checkout-container")) {
        $(window).scroll(function () {
            if ($(this).scrollTop() > 1) {
                $('header').addClass("sticky");
            } else {
                $('header').removeClass("sticky");
            }
        });
    }

    if (document.querySelector(".checkout-mobile-bottom-bar") && isMobile()){
        let submitForm = $(".submit-form"),
            clonedSubmitForm = submitForm.clone();

        submitForm.remove();

        $(".checkout-mobile-bottom-bar").append(clonedSubmitForm);
        $("body").css("padding-bottom", "193px");
    }

    if (document.querySelector(".checkout-success-container") && isMobile()){
        $("body").css("padding-bottom", "24px");
        $("footer").css("margin-top", "14px");
    }
});

window.quantitySelect = function (el, type) {
    let thisEl = $(el),
        parent = thisEl.parents(".quantity-select"),
        activeQuantity = parseInt(parent.find(".quantity").text()),
        maxQuantity = 10;

    switch (type) {
        case "minus":
            let newMinusQuantity = activeQuantity - 1;

            if (newMinusQuantity !== 0 - 1) {
                parent.find(".quantity").text(newMinusQuantity)
                parent.find("input").val(newMinusQuantity)
            }

            break;
        case "plus":
            let newPlusQuantity = activeQuantity + 1 <= maxQuantity ? activeQuantity + 1 : activeQuantity;

            parent.find(".quantity").text(newPlusQuantity)
            parent.find("input").val(newPlusQuantity)
    }

    updateCheckoutSidebar();
}

window.changePaymentMethod = function (el) {
    let thisEl = $(el),
        targetType = thisEl.attr("data-type")

    thisEl.parents(".payment-methods").find(".method").removeClass("active")
    thisEl.addClass("active")

    thisEl.parents(".payment-methods").find(".method-content .method").removeClass("active")
    thisEl.parents(".payment-methods").find(`.method-content .method[data-type="${targetType}"]`).addClass("active")

}

window.handleSubmitButton = function (el) {
    if ($(el).is(':checked')) {
        $("#submit-button").prop("disabled", false);
    } else {
        $("#submit-button").prop("disabled", true);
    }
}

window.readMore = function (el) {
    $(el).parents(".review-content").css({"height": "auto", "overflow": "auto"});
    $(el).parents(".review-content").find("button").hide()
}

window.clearSearchDropdown = function (el) {
    $(el).parents(".search-input").find("input[type='search']").val("")
    $(el).hide();
}

window.toggleSearch = function (el) {
    let thisEl = $(el),
        status = $(el).attr("data-status");

    if (status === "closed") {
        $(".main-nav ul").hide()
        $(".main-nav .search").show()
        $(".main-nav .search input").trigger("focus")
        thisEl.attr("data-status", "opened")
        thisEl.find("i").attr("class", "ph ph-x")
    } else {
        $(".main-nav ul").show()
        $(".main-nav .search").hide()
        thisEl.attr("data-status", "closed");
        thisEl.find("i").attr("class", "ph ph-magnifying-glass")
    }
}

window.updateCheckoutSidebar = function () {
    let finalHTML = "",
        target = $(".summary-list:not(.total)");

    $(".cart-item").each(function (i, k) {
        let thisEl = $(k),
            thisQty = parseInt(thisEl.find(".quantity").text());

        if (thisQty > 0) {
            finalHTML += `<li>
                    <div class="content-left">
                        <strong>${thisQty}x</strong> ${thisEl.data("title")}
                    </div>
                    <div class="content-right">$${thisEl.data("price")}</div>
                </li>`;
        }
    })

    if (finalHTML) {
        target.html(finalHTML);
        $(".summary").find(".placeholder").hide()
    } else {
        target.html("");
        $(".summary").find(".placeholder").show()
    }

    updateTotal();
}

window.toggleMobileMenu = function () {
    let menu = $(".mobile-header");

    if (!menu.hasClass("show")) {
        menu.addClass("show")
    } else {
        menu.removeClass("show")
    }
}

window.showDropdownMenu = function (type){
    switch (type){
        case "user":
            $(".dropdowns").show();
            $(".dropdowns").find(".user-dropdown-menu").addClass("show");
            $(".dropdowns").find(".lang-dropdown").removeClass("show");
            $(".menu-overlay").show()
            break;
        case "language":
            $(".dropdowns").show();
            $(".dropdowns").find(".user-dropdown-menu").removeClass("show");
            $(".dropdowns").find(".lang-dropdown").addClass("show");
            $(".menu-overlay").show()
            break;
        case "close":
            $(".dropdowns").hide();
            $(".dropdowns").find(".user-dropdown-menu").removeClass("show");
            $(".dropdowns").find(".lang-dropdown").removeClass("show");
            $(".menu-overlay").hide()
            break;
    }
}

function updateTotal() {
    let totalPrice = 0,
        USDollar = new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD',
        });

    $(".cart-item").each(function () {
        let price = parseInt($(this).data("price")),
            thisQty = parseInt($(this).find(".quantity").text());

        if (thisQty > 0) {
            let thisTotal = price * thisQty

            totalPrice += thisTotal
        }
    });

    $(".total-price .content-right").text(USDollar.format(totalPrice))
}

function isMobile() {
    // credit to Timothy Huang for this regex test:
    // https://dev.to/timhuang/a-simple-way-to-detect-if-browser-is-on-a-mobile-device-with-javascript-44j3
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}