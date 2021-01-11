// nav 

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



// fullscreen pictures

const nike1 = document.querySelector( '.productimage1' )

const nike2 = document.querySelector( '.productimage2' )

const nike3 = document.querySelector( '.productimage3' )


const full = document.querySelector( '.full' )

const full2 = document.querySelector( '.full2' )

const full3 = document.querySelector( '.full3' )

const fullscreen = () => {
    full.classList.toggle( 'fullscreen' )

}

const fullscreen2 = () => {
    full2.classList.toggle( 'fullscreen' )
}

const fullscreen3 = () => {
    full3.classList.toggle( 'fullscreen' )
}

nike1.addEventListener( "click", () => {
    fullscreen()
} )

nike2.addEventListener( "click", () => {
    fullscreen2()
} )

nike3.addEventListener( "click", () => {
    fullscreen3()
} )

document.addEventListener( "click", ( e ) => {
    if ( e.target == full ) {
        full.classList.remove( 'fullscreen' )
    }
} )