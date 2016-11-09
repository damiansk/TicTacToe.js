"use strict";

(function () {
    var player_sign = 'circle',
        cells,
        round = 0,
        board = [
            1, 2, 3,
            4, 5, 6,
            7, 8, 9
        ];

    function blockBoard() {
        cells = document.getElementsByClassName( 'active-cell' );

        for ( let i = cells.length-1; i >= 0; i-- ) {
            cells[i].classList.remove( 'active-cell' );
        }
    }

    function checkWinner() {
        for ( let i = 0; i < 9; i += 3 ) {
            if ( board[i] === board[i+1] && board[i] === board[i+2] ) {
                return board[i];
            }
        }

        for ( let i = 0; i < 3; i++ ) {
            if ( board[i] === board[i+3] && board[i] === board[i+6] ) {
                return board[i];
            }
        }

        if ( board[0] === board[4] && board [0] === board[8] ) {
            return board[0];
        }

        if ( board[2] === board[4] && board [2] === board[6] ) {
            return board[2];
        }

        if ( round === 9 ) {
            return 'nobody';
        }

        return null;
    }

    function swapPlayer() {
        if ( player_sign === 'circle' ) {
            player_sign = 'cross';
        } else {
            player_sign = 'circle';
        }
    }

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

    function mouseClickEvent( index ) {
        if ( this.classList.contains( 'active-cell' ) ) {
            let div = this.firstChild;

            div.classList.remove( player_sign + '-shadow' );
            div.classList.add( player_sign );
            this.classList.remove( 'active-cell' );

            board[index] = player_sign;
            round++;

            let winner = checkWinner();

            if ( winner !== null ) {
                alert( winner + ' win' );
                blockBoard();
            } else {
                swapPlayer();
            }
        }
    }


    cells = document.getElementsByClassName( 'active-cell' );

    for ( let i = cells.length-1; i >= 0 ; i-- ) {
        cells[i].addEventListener( 'mouseenter', mouseEnterEvent, false );
        cells[i].addEventListener( 'mouseleave', mouseLeaveEvent, false );
        cells[i].addEventListener( 'click', mouseClickEvent.bind( cells[i], i ), false );
    }
})();