"use strict";

(function () {
    var player_sign = 'circle',
        cells;


    function mouseEnterEvent() {
        if ( this.classList.contains( 'active-cell' ) ) {
            this.firstChild.classList.add( player_sign + '-shadow' );
        }
    }

    function mouseLeaveEvent() {
        if ( this.classList.contains( 'active-cell' ) ) {
            this.firstChild.classList.remove( player_sign + '-shadow' );
        }
    }

    function mouseClickEvent() {
        if ( this.classList.contains( 'active-cell' ) ) {
            let div = this.firstChild;

            div.classList.remove( player_sign + '-shadow' );
            div.classList.add( player_sign );
            this.classList.remove( 'active-cell' );

        }
    }


    cells = document.getElementsByClassName( 'active-cell' );

    for ( let i = cells.length-1; i >= 0 ; i-- ) {
        cells[i].addEventListener( 'mouseenter', mouseEnterEvent, false );
        cells[i].addEventListener( 'mouseleave', mouseLeaveEvent, false );
        cells[i].addEventListener( 'click', mouseClickEvent.bind(cells[i]), false );
    }
})();