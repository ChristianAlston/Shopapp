const nav = document.querySelector( '.navscreen' )

const burger = document.querySelector( '.burger' )

const game = document.querySelector( '.game' )

const game2 = document.querySelector( '.game2' )

const game3 = document.querySelector( '.game3' )

const line = document.querySelector( '.line' )

const line2 = document.querySelector( '.line2' )

const line3 = document.querySelector( '.line3' )

const links = document.querySelectorAll( '.link' )

const openNav = () => {
    nav.classList.toggle( 'open' )
}



burger.addEventListener( "click", () => {
    openNav();
    game.classList.toggle( 'a' )
    game2.classList.toggle( 'a' )
    game3.classList.toggle( 'a' )
    line.classList.toggle( 'x' )
    line2.classList.toggle( 'x2' )
    line3.classList.toggle( 'x3' )
    links.forEach( ( link ) => {
        link.classList.toggle( 'appear' )
    } )
} )
