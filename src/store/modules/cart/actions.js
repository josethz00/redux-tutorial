function addToCartRequest (id) {

    return {

        type: '@cart/ADD_REQUEST',
        id

    };

}

export { addToCartRequest };

function addToCartSuccess (product) {

    return {

        type: '@cart/ADD_SUCCESS',
        product

    };

}

export { addToCartSuccess };

function removeFromCart (id) {

    return {

        type: '@cart/REMOVE',
        id

    };

}

export { removeFromCart };

function updateAmountRequest (id, amount) {

    return {

        type: '@cart/UPDATE_AMOUNT_REQUEST',
        id,
        amount

    };

}

export { updateAmountRequest };

function updateAmountSuccess (id, amount) {

    return {

        type: '@cart/UPDATE_AMOUNT_SUCCESS',
        id,
        amount

    };

}

export { updateAmountSuccess };