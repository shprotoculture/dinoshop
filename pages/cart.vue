<template lang="pug">
    main.main
        section.section
            .container
                //- .section__heading
                //-     h4.section__heading-title Корзина
                .section__content
                    .section__info(v-if="cartCount <= 0")
                        h4.section__info-title Ваша корзина пуста.
                        nuxt-link(to="/catalog" class="section__info-link") Перейти в каталог
                    app-cart(v-else)

</template>

<script>
import AppCart from '~/components/pageComponents/cart/AppCart';
export default {
    transition: 'p',
    components: {
        AppCart
    },
    computed: {
        cartCount () {
            return this.$store.getters.cartCount;
        }
    }
}
</script>

<style lang="scss">
.section__info {
    text-align: center;
    h4 {
        margin-bottom: 10px;
        font-size: 24px;
        font-weight: 300;
    }
}
</style>
