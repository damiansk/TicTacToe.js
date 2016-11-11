"use strict";

(function () {
    var player_sign = 'circle',
        cells = document.getElementsByTagName( 'td' ),
        roundNumber = 0,
        roundDiv = document.getElementById( 'round' ),
        board = [
            1, 2, 3,
            4, 5, 6,
            7, 8, 9
        ];


    function blockBoard() {
        for ( let i = cells.length-1; i >= 0; i-- ) {
            cells[i].classList.remove( 'active-cell' );
        }
    }

    function checkWinner() {
        for ( let i = 0; i < 9; i += 3 ) {
            if ( board[i] === board[i+1] && board[i] === board[i+2] ) {
                return [ i, i+1, i+2];
            }
        }

        for ( let i = 0; i < 3; i++ ) {
            if ( board[i] === board[i+3] && board[i] === board[i+6] ) {
                return [ i, i+3, i+6];
            }
        }

        if ( board[0] === board[4] && board [0] === board[8] ) {
            return [ 0, 4, 8];
        }

        if ( board[2] === board[4] && board [2] === board[6] ) {
            return [ 2, 4, 6];
        }

        if ( roundNumber === 9 ) {
            return 'nobody';
        }

        return null;
    }

    function showWinner( winnerCells ) {
        var lengthCells = winnerCells.length;

        if ( lengthCells === 3 ) {
            document.getElementById( 'round-label' ).textContent = 'Wygrana:';

            for ( let i = 0; i < lengthCells; i++ ) {
                let node = cells[ winnerCells[ i ] ].firstChild;

                if ( node.classList.contains( 'cross' ) ) {
                    node.classList.add( 'cross-winner' );
                } else {
                    node.classList.add( 'circle-winner' );
                }
            }
        } else {
            document.getElementById( 'round-label' ).textContent = 'Remis!';
            document.getElementById( 'round' ).className = '';
        }
    }

    function swapPlayer() {
        if ( player_sign === 'circle' ) {
            roundDiv.classList.remove( player_sign );
            player_sign = 'cross';
            roundDiv.classList.add( player_sign );
        } else {
            roundDiv.classList.remove( player_sign );
            player_sign = 'circle';
            roundDiv.classList.add( player_sign );
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
            roundNumber++;

            let winner = checkWinner();

            if ( winner !== null ) {
                showWinner( winner );
                blockBoard();
            } else {
                swapPlayer();
            }
        }
    }


    for ( let i = cells.length-1; i >= 0 ; i-- ) {
        cells[i].addEventListener( 'mouseenter', mouseEnterEvent, false );
        cells[i].addEventListener( 'mouseleave', mouseLeaveEvent, false );
        cells[i].addEventListener( 'click', mouseClickEvent.bind( cells[i], i ), false );
    }
})();