import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

import { header } from './header/index';

const store = () => new Vuex.Store({
    modules: {
        header
    }
});

export default store;