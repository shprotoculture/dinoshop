<template lang="pug">
    .cart-item
        .cart-item__image-wrapper.cart-item__col
            img(:src="product.preview")
        .cart-item__name.cart-item__col {{product.name}}
        .cart-item__price.cart-item__col
            div
                | {{currentPrice}}
                span.sup  руб 
        .cart-item__qty.cart-item__col
            app-product-qty-input(:currentQty="qty" @qty-changed="changeQty")
        .cart-item__remove.cart-item__col
            button.cart-item__remove-button(type="button" title="Удалить" @click="removeItem(product.id)")
                i.fal.fa-times
        
</template>

<script>
import AppProductQtyInput from "~/components/global/others/AppProductQtyInput";
export default {
    components: {
        AppProductQtyInput
    },
    props: ['productID'],
    data () {
        return {
            id: this.productID
        }
    },
    computed: {
        product() {
            return this.$store.state.catalog.products.products.filter(
                item => item.id == this.id
            )[0];
        },
        currentPrice() {
            let currentPrice =
                this.product.price -
                this.product.price * (this.product.saleValue / 100);

            return this.product.isSale ? currentPrice.toFixed(2) : false;
        },
        qty () {
            return this.$store.state.cart.productsInCart[this.productID] || 0;
        },
        getProductsInCart () {
            return this.$store.state.cart.productsInCart;
        }
    },
    methods: {
        changeQty(e) {
            if (e <= 0 || !e) {
                this.$store.commit("removeProductFromCart", this.id);
                this.$cookies.set("products", this.productsInCart, 7);
            } else {
                this.$store.commit("addProductToCart", { id: this.id, qty: e });
                this.$cookies.set("products", this.productsInCart, 7);
            }
        },
        removeItem (id) {
            this.$store.commit('removeProductFromCart', id);
            this.$cookies.set('products', this.getProductsInCart, 7);
        }
    }
}
</script>

<style lang="scss">
@import "~assets/scss/global/vars";

.cart-item {
    display: flex;
    align-items: stretch;
    justify-content: flex-start;
    flex-wrap: wrap;
    background: #fff;
    border: 1px solid #f2f2f2;
    border-bottom: none;
    &:last-child {
        border-bottom: 1px solid #f2f2f2;
    }
    &__col {
        padding: 15px;
        display: flex;
        align-items: center;
        justify-content: center;
        border-right: 1px solid #f2f2f2;
        &:last-child {
            border-right: none;
        }
    }
    &__remove {
        width: 10%;
        flex: 0 0 10%;
        &-button {
            border: none;
            background: none;
            color: #000;
            font-size: 16px;
        }
    }
    &__image-wrapper {
        width: 20%;
        flex: 0 0 20%;
        img {
            max-width: 100px;
        }
    }
    &__name {
        width: 30%;
        flex: 0 0 30%;
        text-align: center;
        font-size: 14px;
        font-weight: 500;
    }
    &__price {
        width: 20%;
        flex: 0 0 20%;
        font-size: 14px;
        font-weight: 500;
    }
    &__qty {
        width: 20%;
        flex: 0 0 20%;
    }

    @media screen and (max-width: 767px) {
        &__col {
            border: none;
        }
        &__remove {
            width: 33.33333%;
            flex: 0 0 33.33333%;
            border-top: 1px solid #f2f2f2;
            &-button {
                border: none;
                background: none;
                color: #000;
                font-size: 16px;
            }
        }
        &__image-wrapper {
            width: 50%;
            flex: 0 0 50%;
            img {
                max-width: 100px;
            }
        }
        &__name {
            width: 50%;
            flex: 0 0 50%;
            text-align: center;
            font-size: 14px;
            font-weight: 500;
        }
        &__price {
            width: 33.33333%;
            flex: 0 0 33.33333%;
            font-size: 14px;
            font-weight: 500;
            border-top: 1px solid #f2f2f2;
            border-right: 1px solid #f2f2f2;
        }
        &__qty {
            width: 33.33333%;
            flex: 0 0 33.33333%;
            border-top: 1px solid #f2f2f2;
            border-right: 1px solid #f2f2f2;
        }
    }

    @media screen and (max-width: 575px) {
        &__col {
            border: none;
        }
        &__remove {
            width: 50%;
            flex: 0 0 50%;
            border-top: 1px solid #f2f2f2;
            &-button {
                border: none;
                background: none;
                color: #000;
                font-size: 16px;
            }
        }
        &__image-wrapper {
            width: 100%;
            flex: 0 0 100%;
            img {
                max-width: 100%;
            }
        }
        &__name {
            width: 100%;
            flex: 0 0 100%;
            text-align: center;
            font-size: 14px;
            font-weight: 500;
        }
        &__price {
            width: 100%;
            flex: 0 0 100%;
            font-size: 14px;
            font-weight: 500;
        }
        &__qty {
            width: 50%;
            flex: 0 0 50%;
            border-top: 1px solid #f2f2f2;
            border-right: 1px solid #f2f2f2;
        }
    }
}
</style>
