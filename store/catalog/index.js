import { categories } from './categories';
import { products } from './products';

export const catalog = {
    modules: {
        categories,
        products
    },
    state: {
        currentPage: 1
    },
    mutations: {
        changeCurrentPage(state, payload) {
            state.currentPage = payload;
        },
        resetCurrentPage(state) {
            state.currentPage = 1;
        }
    }
}