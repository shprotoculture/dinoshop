import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

import { header } from './header/index';
import { catalog } from './catalog/index';
import { cart } from './cart/index';

const store = () => new Vuex.Store({
    modules: {
        header,
        catalog,
        cart
    }
});

export default store;