import Splide from '@splidejs/splide';
import '@splidejs/splide/css';
import '@splidejs/splide/css/sea-green';


if (document.querySelector("#homeSlider")) {
    const splide = new Splide( '#homeSlider', {
        type   : 'slide',
        perPage: 1,
        arrows:false,
        pagination:false
    })

    splide.on( 'pagination:mounted', function ( data ) {
        // You can add your class to the UL element
        data.list.classList.add( 'splide__pagination--custom' );

        // `items` contains all dot items
        data.items.forEach( function ( item ) {
            item.button.textContent = String( item.page + 1 );
        } );
    } );

    splide.mount();
}