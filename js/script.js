(function () {
    var cells = document.getElementsByClassName( 'active-cell' );
    var sign = 'circle';

    for ( var i = cells.length; i > 0 ; i-- ) {
        cells[i-1].addEventListener( 'mouseenter', function ( evt ) {
            if ( this.classList.contains( 'active-cell' ) ) {
                console.log( 'mouseenter' );

                this.getElementsByTagName('div')[0].classList.add( sign + '-shadow' );
            }
        }, false );

        cells[i-1].addEventListener( 'mouseleave', function ( evt ) {
            if ( this.classList.contains( 'active-cell' ) ) {
                console.log( 'mouseleave' );

                this.getElementsByTagName( 'div' )[0].classList.remove( sign + '-shadow' );
            }
        }, false );

        cells[i-1].addEventListener( 'click', function (evt) {
            if ( this.classList.contains( 'active-cell' ) ) {
                console.log( 'click' );

                let div = this.getElementsByTagName( 'div' )[0];
                div.classList.remove( sign + '-shadow' );
                div.classList.add( sign );
                this.classList.remove( 'active-cell' );

                if ( sign === 'circle' ) {
                    sign = 'cross';
                } else {
                    sign = 'circle';
                }

            }
        }, false);

    }



})();