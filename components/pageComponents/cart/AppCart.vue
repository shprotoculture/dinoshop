<template lang="pug">
    .cart
        .cart-header
            .cart-header__col.cart-header__img
            .cart-header__col.cart-header__name Наименование
            .cart-header__col.cart-header__price Цена
            .cart-header__col.cart-header__qty Кол-во
            .cart-header__col.cart-header__remove
        .cart-list
            app-cart-item(v-for="(product, key, i) in products" :key="key" :productID="key")
        .cart-footer
            .cart-total
                | Итого: {{totalPrice}}
                span.sup  руб
        .cart-checkout
            nuxt-link(class="button button--submit button--medium" to="/checkout") Продолжить
</template>

<script>
import AppCartItem from '~/components/pageComponents/cart/AppCartItem';
export default {
    components: {
        AppCartItem
    },
    computed: {
        products () {
            return this.$store.state.cart.productsInCart;
        },
        totalPrice () {
            let totalPrice = 0;
            for (let key in this.products) {
                let product = this.$store.state.catalog.products.products.filter(item => item.id == key)[0];
                if (product.isSale) {
                    totalPrice += (product.price - (product.price * (product.saleValue / 100))) * this.products[key];
                } else {
                    totalPrice += product.price * this.products[key];
                }
            }
            return totalPrice.toFixed(2);
        },
    }
}
</script>

<style lang="scss">
.cart-header {
    display: flex;
    align-items: stretch;
    justify-content: flex-start;
    background: #fff;
    border: 1px solid #f2f2f2;
    border-bottom: none;
    &__col {
        padding: 15px;
        text-align: center;
        border-right: 1px solid #f2f2f2;
        font-size: 14px;
        font-weight: 500;
        &:last-child {
            border-right: none;
        }
    }
    &__remove {
        width: 10%;
        flex: 0 0 10%;
    }
    &__img {
        width: 20%;
        flex: 0 0 20%;
    }
    &__name {
        width: 30%;
        flex: 0 0 30%;
    }
    &__price {
        width: 20%;
        flex: 0 0 20%;
    }
    &__qty {
        width: 20%;
        flex: 0 0 20%;
    }

    @media screen and (max-width: 767px) {
        display: none;
    }
}

.cart-footer {
    padding: 15px;
    background: #fff;
    text-align: right;
    border: 1px solid #f2f2f2;
    border-top: none;
}

.cart-total {
    font-size: 14px;
    font-weight: 500;
}

.cart-checkout {
    padding: 15px 0;
    text-align: right;
}
</style>
