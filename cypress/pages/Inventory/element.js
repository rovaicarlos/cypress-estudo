export const elements = {
    addToCart: (itemName) => `[data-test="add-to-cart-${transform(itemName)}"]`,
    removeFromCart: (itemName) => `[data-test="remove-${transform(itemName)}"]`,
    iconCart:'.shopping_cart_link'
}

function transform(texto){
    return texto.replaceAll(' ', '-').toLowerCase()
}