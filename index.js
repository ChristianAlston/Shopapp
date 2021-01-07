let listOfShoes = [ {
    name: 'shoe1',
    sizes: [ 11, 12, 13 ]
},
{
    name: 'shoe1',
    sizes: [ 11, 12, 13 ]
},
{
    name: 'shoe1',
    sizes: [ 11, 12, 13 ]
}
]

const createShoes = ( list ) => {
    list.map( ( shoe ) => {
        return `<h1> ${shoe.name} </h1>
                <p>${shoe.sizes} </p>`
    } )
}

const generate = document.querySelector( '.button' )

generate.addEventListener( 'click', createShoes )