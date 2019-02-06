import Vue from 'vue';

export const cart = {
    state: {
        productsInCart: {},
        totalPrice: 0
    },
    mutations: {
        addProductToCart(state, payload) {
            Vue.set(state.productsInCart, payload.id, payload.qty);
        },
        removeProductFromCart(state, payload) {
            Vue.delete(state.productsInCart, payload);
        },
        setProductsInCart(state, payload) {
            state.productsInCart = payload;
        }
    },
    getters: {
        getCurrentPrice(state) {
            state.totalPrice = 0;
            for (let key in state.productsInCart) {
                let product = state.catalog.products.filter(item => item.id == key)[0];
                if (product.isSale) {
                    state.totalPrice += (product.price - (product.price * (product.saleValue / 100))) * state.productsInCart[key];
                } else {
                    state.totalPrice += product.price * state.productsInCart[key];
                }
            }
            return state.totalPrice;
        },
        cartCount(state) {
            return Object.keys(state.productsInCart).length;
        }
    }
}